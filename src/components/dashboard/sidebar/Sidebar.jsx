import React, { useContext } from 'react';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { FiMessageSquare } from "react-icons/fi";
import { FiFilePlus } from "react-icons/fi";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom';
import "./sidebar.scss";
import { DarkModeContext } from '../../../context/darkModeContext';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
    <div className="top">
      <Link to="/projects">
        <span className="logo">Hoy lo firmo</span>
        </Link>
    </div>
    <hr />
    <div className="center">
      <ul>
        <p className="title-sidebar">MAIN</p>
        <li>
          <DashboardIcon className="icon-sidebar" />
          <span>Dashboard</span>
        </li>
        <p className="title-sidebar">LISTS</p>
          <li>
            <PersonOutlineIcon className="icon-sidebar" />
            <span>Usuarios</span>
          </li>
          <li>
            <FiFilePlus className="icon-sidebar" />
            <span>Importar</span>
          </li>
        <li>
          <FiMessageSquare className="icon-sidebar" />
          <span>Mensajeria</span>
        </li>
        <li>
          <LocalShippingIcon className="icon-sidebar" />
          <span>Envios</span>
        </li>
        <p className="title-sidebar">USEFUL</p>
        <li>
          <InsertChartIcon className="icon-sidebar" />
          <span>Estadisticas</span>
        </li>
        <li>
          <NotificationsNoneIcon className="icon-sidebar" />
          <span>Notificaciones</span>
        </li>
        <p className="title-sidebar">SERVICE</p>
        <li>
          <PsychologyOutlinedIcon className="icon-sidebar" />
          <span>Empleados</span>
        </li>
        <li>
          <SettingsApplicationsIcon className="icon-sidebar" />
          <span>Configuraciones</span>
        </li>
        <p className="title-sidebar">USER</p>
        <li>
          <AccountCircleOutlinedIcon className="icon-sidebar" />
          <span>Perfil</span>
        </li>
        <li>
          <ExitToAppIcon className="icon-sidebar" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div className="bottom">
      <div
        className="colorOption"
        onClick={() => dispatch({ type: "LIGHT"})}   
      ></div>
      <div
        className="colorOption"
        onClick={() => dispatch({ type: "DARK"})}
      ></div>
    </div>
  </div>
  )
}

export default Sidebar