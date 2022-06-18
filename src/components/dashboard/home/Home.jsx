import React from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import Widget from '../widget/Widget';
import Table from '../table/Table';
import Chart from '../chart/Chart';
import Featured from '../featured/Featured';
import "./home.scss";

const Home = () => {
  return (
    <div className='home-dash'>
           <Sidebar />
           <div className="homeContainer">
             <Navbar />
              <div className="widgets">
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
              </div>
              <div className="widgets">
                <Widget type="hoylofirmo1"/>
                <Widget type="hoylofirmo2"/>
                <Widget type="hoylofirmo3"/>
                <Widget type="hoylofirmo4"/>
              </div>
              <div className="charts">
                <Featured/>
                <Chart title="Evolución de Remunerativo" aspect={2 / 1} />
              </div>
              <div className="listContainer">
                <div className="listTitle">Usuarios</div>
                <Table />
              </div>
           </div>
    </div>
  )
}

export default Home