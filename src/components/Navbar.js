import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
// import { Calendar } from 'primereact/calendar';

const Navbar = () => {
  // const [date, setDate] = useState(null);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);
  };
  const items = [
    {
      label: "React Page",
      command: () => {
        // window.location.href = 'https://reactjs.org/'// Misma pestaña
        window.open('https://reactjs.org/', '_blank'); //Nueva pestaña
      },
    },
    {
      label: "Trabajadores",
      className: "about-item",
      command: () => {
        handleNavigation('/');
      },
    },
    {
      label: "Candidatos",
      className: "about-item",
      command: () => {
        handleNavigation('/listado');
      },
    },
    // {
    //   label: 'Settings',
    //   icon: 'pi pi-fw pi-user',
    //   items: [
    //     {
    //       label: 'Ecuaciones',
    //       icon: 'pi pi-fw pi-user-plus',
    //       className: "about-item",
    //       command: () => {
    //         handleNavigation('/ecuations')
    //       },

    //     },
    //     {
    //         label: 'MangageFiles',
    //         icon: 'pi pi-fw pi-user-plus',
    //         className: "about-item",
    //         command: () => {
    //           handleNavigation('/managefiles')
    //         },

    //     },

    //   ],
    // },
  ];

  const start = (
    <img alt="logo"
      // onClick={() => handleNavigation('/')}
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="logo-pointer mr-2">
    </img>
  );
  const end = (
    <>
    {/* <div className="card flex justify-content-center">
      <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
    </div> */}
    {/* <Button label="" type="text" className="" icon="pi pi-calendar"  /> */}

    {
    isAuthenticated ?
    <Button label="Logout" className=""
      onClick={() => { logout({ returnTo: window.location.origin }) }}
    />
    :
    <Button label="Login" className=""
      onClick={() =>{ loginWithRedirect()} }
    />
    }
    </>
  );

  return (
    <>
    <Menubar model={items} start={start} end={end} severity={"success"} />
    </>
  )
}

export default Navbar