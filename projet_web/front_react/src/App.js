import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar.js';
import DataCard from './DataCard.js';
import axios from "axios";


import Chart1 from './Chart1.js';
import Pcircle from "./ProgressCircle";
import Pie1 from './Pie.js';
const _ =require('bootstrap');
const API_URL = "http://localhost:3000/mesures/5ddbaac6fc13ae4b49000001";



class Rendufinale extends React.Component{

    callAPI () {

        // Call API
       // console.log("Bjr");
        axios
            .get(`${API_URL}`)
            .then(({data}) => {
               // console.log(data);
                alert("pierrrrrrr");
                const main =data.type;
                alert(main);
                alert("pierrrrrrr");
                document.getElementById('asideCard').innerHTML=main;
            })
            .catch(alert("victor"));
    }
    render() {
        return(
            <div className="main">
                <Navbar/>

                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9">
                            <div id="buttons">
                                <button className="favorite styled"type="button" onClick={() => this.callAPI()}>Michael</button>
                            </div>



                        <div id="mainCard">
                            <div className="row">
                                <Chart1/>
                            </div>

                            <div className="row">
                                <div className="col-lg-3">
                                    <Pie1/>
                                </div>
                                <div className="col-lg-4">
                                    <Pcircle/>
                                </div>
                                <div id ="datacard" className="col-lg-4">
                                    <DataCard/>
                                </div>
                                <div id ="datacard" className="col-lg-1">

                                </div>
                            </div>

                        </div>
                        </div>
                        <div className="col-lg-3">
                            <div id="asideCard" className="card">
                                <article>
                                    Pollution par pays
                                    France: 37
                                </article>
                            </div>
                        </div>
                    </div>

            </div>

            </div>


        );
    }
}

export default Rendufinale;
