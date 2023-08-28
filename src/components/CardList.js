import { useState } from 'react';
import Card from "../components/Card";
import { Button } from 'primereact/button';
import { Paginator } from 'primereact/paginator';

const CardList = ({ responseData, loading, error, prevPage, nextPage, page, totalPages }) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (responseData && responseData.length === 0) {
    return <div>NO RESULT</div>;
  }

  return (
    <div className="row">
      {/* {loading ? <div>Loading...</div> : (
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      )} */}
      <span className="col">
        <Button label="Previous" icon="pi pi-check" onClick={prevPage} disabled={page === 1} />
      </span>
      <span className="col">
        <Button label="Next" icon="pi pi-check" onClick={nextPage} disabled={page === totalPages} />
      </span>
      <ul>
      {responseData.map((card, index) => (
        <li key={index}>{index}
          <Card card={card} />
        </li>
      ))}
      </ul>
    </div>
  )
}

export default CardList