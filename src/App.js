
import { Route, Routes } from 'react-router-dom';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';
import { useSessionStorage, useCounter, } from 'primereact/hooks';
import { useLocalStorage } from 'primereact/hooks';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeicons/primeicons.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import logo from './logo.svg';
// import './App.css';

function App() {
  // const { count, increment, decrement, reset } = useCounter(0);
  // const [count, setCount] = useLocalStorage(0, 'count');
  return (
    <PrimeReactProvider>
      <div className="">
        <Navbar />
        {/* <div className="card flex flex-column align-items-center">
          <span className="font-bold text-4xl mb-5">{count}</span>
          <div className="flex flex-wrap gap-3">
              <Button icon="pi pi-plus" className="p-button-outlined p-button-rounded p-button-success" onClick={() => setCount(count + 1)}></Button>
              <Button icon="pi pi-minus" className="p-button-outlined p-button-rounded p-button-success" onClick={() => setCount(count - 1)}></Button>
              <Button icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger" onClick={() => setCount(0)}></Button>
          </div>
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </PrimeReactProvider>

  );
}

export default App;
