import { useState, useEffect } from 'react'
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';

import CardList from "../components/CardList";

const Home = () => {
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [textToSearch, setTextToSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    const getFetchOptions = {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
    }
    if (page > totalPages) setPage(1)
    const url = `https://api.gatcg.com/cards/search?name=${textToSearch}&page=${page}`;
    try {
      const res = await fetch(url, getFetchOptions);
      console.log("resres", res);
      if (res.status === 200) {
        const data = await res.json();
        setResponseData(data.data);
        setTotalPages(data.total_pages)
        console.log("data", data);
        console.log("pag", data.page, "page_size", data.page_size, "total_pages", data.total_pages)
      } else if (res.status === 204) {
        setResponseData([]);
        setPage(1);
      }
    } catch(err) {
      setLoading(false);
      console.log(err);
    }
    
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      fetchData();
    }
  };
  
  const prevPage = () => {
    // Aseguramos que la página sea al menos 1
    if (page > 1) {
      setPage(page - 1);
      fetchData();
    }
  };
  // const handleSearch = (e) => {
  //   console.log(e.target.value)
  //   setTextToSearch(e.target.value)
  // }

  const handleSearch = (e) => {
    // console.log(e.target.value);
    // setTextToSearch(e.target.value);
    setPage(1); // Reset page to 1 before making the search
    fetchData();
  };

  const handleChange = (e) => {
    setTextToSearch(e.target.value)
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          Column
        </div>
      </div>
      <div className="row my-3 flex justify-content-center">
        <span className="col">
          <InputText placeholder="Search" onChange={handleChange} />
        </span>
        <span className="col">
          <Button label="Submit" icon="pi pi-check" onClick={handleSearch}  />
        </span>
      </div>
      <div className="row flex justify-content-center">
      <CardList
        responseData={responseData} loading={loading} error={error} page={page}
        totalPages={totalPages} prevPage={prevPage} nextPage={nextPage}
      />

      </div>

    </div>
  )
}

export default Home