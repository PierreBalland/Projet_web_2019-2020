import React from 'react';
import logocapteurs from './logocapteurs.png';
import axios from "axios";
const API_URL = "http://localhost:3000/mesures/";


class DataCard extends React.Component {


    componentDidMount() {
        alert("hello");
        // Call API
        // console.log("Bjr");
        axios.get(`${API_URL}`)
            .then(({ data }) => {
                // console.log(data);
                const main =data.length;
                document.getElementById('pierre').innerHTML=main;
            })
            .catch(console.error);


    }

    render() {
        return (
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={logocapteurs} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre de capteurs</h5>
                            <div id="pierre"></div>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
function callAPI () {


};
export default DataCard;