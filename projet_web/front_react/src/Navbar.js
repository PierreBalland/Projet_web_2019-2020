import React from 'react';

import logo from './logo.svg';
import './Nav.css';
import Chien from './Chien1.jpg';

class Navbar extends React.Component {

    render() {
        return (

            <div id="globaldiv">
                <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-1  col-sm-3 d-none d-lg-block">
                                    <img class="fit-picture"src={Chien} />
                                    </div>
                                    <div className="col-lg-2  col-sm-3 d-none d-lg-block">
                                    <div id='home'> DOGATMO</div>
                                    Le capteur qui a du flair

                                    </div>
                                    <div className="col-lg-3  col-sm-3 d-none d-lg-block">


                                                                        </div>
                                    <div className="col-lg-2  col-sm-3 d-none d-lg-block">
                                    <div id="home"><button>Home</button> </div>
                                    </div>
                                    <div className="col-lg-2  col-sm-3 d-none d-lg-block">
                                                                        <div id="home"><button>Admin</button> </div>
                                                                        </div>
                                    <div className="col-lg-2  col-sm-3 d-none d-lg-block">
                                     <div id="home"><button>Help</button> </div>
                                    </div>
                                </div>
                            </div>
            </div>

        );
    }
}
export default Navbar;