import React, { useState } from 'react'

const CardList = () => {
  const [responseData, setResponseData] = useState(null);
  // const url = "https://api.gatcg.com";
  const url = "https://randomuser.me/api/?results=6"

  const getOpt = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }
  const getAllCards = async () => {
    const res = await fetch(url, getOpt)
    try {
      if (res.ok) {
        const data = await res.json()
        console.log(data)
      }
    } catch (err) {
      console.error("error catch", err)
    }

  }
  // getAllCards()
  function fetchData() {
    fetch(url, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      // mode: "no-cors",
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setResponseData(data); // Guardar la respuesta en el estado
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  return (
    <div>
      <button onClick={fetchData}>Hacer solicitud Fetch</button>
      {responseData && (
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      )}
    </div>
  )
}

export default CardList