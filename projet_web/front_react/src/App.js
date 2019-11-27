import React from 'react';
import logo from './logo.svg';
import './App.css';
const _ =require('bootstrap')
class App extends React.Component {



  render() {


    return (

        <div id="globaldiv">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3  col-sm-3 d-none d-lg-block">
                        Bonjour 1
                    </div>
                    <div className="col-lg-3  col-sm-3 d-none d-lg-block">
                        Bonjour 2
                    </div>
                    <div className="col-lg-3  col-sm-3 d-none d-lg-block">
                        Bonjour 3
                    </div>
                    <div className="col-lg-3  col-sm-3 d-none d-lg-block">
                        Bonjour 4
                    </div>
                </div>
            </div>
        </div>
    );
  }

}

export default App;
