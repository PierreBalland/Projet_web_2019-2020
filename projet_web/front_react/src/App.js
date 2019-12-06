import React from 'react';
import logo from './logo.svg';
import './App.css';

//création de l'instance mongoose et url
var mongoose = require('mongoose');
mongoose.Promise=global.Promise;
const dbName= "DashboardProject";
const dbURL= mongodb://localhost:27017/${dbName};
mongoose.connect(dbURL, {useNewUrlParser: true});
import Navbar from './Navbar.js';
import Chart1 from './Chart1.js';
import Pcircle from "./ProgressCircle";
import Pie1 from './Pie.js';
const _ =require('bootstrap');




class Rendufinale extends React.Component{

    render() {
        return(
            <div className="main">
                <Navbar/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">

                        <div id="mainCard" className="card" >
                            <div className="row">
                                <Chart1/>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <Pie1/>


                                </div>
                                <div className="col-lg-6">
                                    <Pcircle/>
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
