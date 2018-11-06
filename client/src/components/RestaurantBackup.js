import React from 'react';
import Logo from '../images/communicateLogo.png';
import tableViewLogo from '../images/tableView.png';
import alertViewLogo from '../images/alertView.png';


import './RestaurantBackup.css';

const Restaurant = () => (
    <div>
        <header>
      <img className="responsive-img Logo" src={Logo} />
        </header>
        <main>
            <div className="row">
                <div className="col s12 m9 l9">
                    <div className="row tableDiv">

                        <div className="top">
                            <img className="responsive-img subLogo" src={tableViewLogo} />
                        </div>

                        {/* THIS IS WHERE THE TABLE STUFF SHOULD GO */}

                        <div className="col s12 m3 l3">
                        <div className="card tableCard grey darken-3">
                            <div className="card-content white-text">
                            <span className="card-title">Table 1</span>
                            <p>This is where the table requests should go.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col s12 m3 l3">
                        <div className="card tableCard grey darken-3">
                            <div className="card-content white-text">
                            <span className="card-title">Table 2</span>
                            <p>This is where the table requests should go.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col s12 m3 l3">
                        <div className="card tableCard grey darken-3">
                            <div className="card-content white-text">
                            <span className="card-title">Table 3</span>
                            <p>This is where the table requests should go.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col s12 m3 l3">
                        <div className="card tableCard grey darken-3">
                            <div className="card-content white-text">
                            <span className="card-title">Table 4</span>
                            <p>This is where the table requests should go.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col s12 m3 l3">
                        <div className="card tableCard grey darken-3">
                            <div className="card-content white-text">
                            <span className="card-title">Table 5</span>
                            <p>This is where the table requests should go.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col s12 m3 l3">
                        <div className="card tableCard grey darken-3">
                            <div className="card-content white-text">
                            <span className="card-title">Table 6</span>
                            <p>This is where the table requests should go.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col s12 m3 l3">
                        <div className="card tableCard grey darken-3">
                            <div className="card-content white-text">
                            <span className="card-title">Table 7</span>
                            <p>This is where the table requests should go.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col s12 m3 l3">
                        <div className="card tableCard grey darken-3">
                            <div className="card-content white-text">
                            <span className="card-title">Table 8</span>
                            <p>This is where the table requests should go.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col s12 m3 l3">
                        <div className="card tableCard grey darken-3">
                            <div className="card-content white-text">
                            <span className="card-title">Table 9</span>
                            <p>This is where the table requests should go.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col s12 m3 l3">
                        <div className="card tableCard grey darken-3">
                            <div className="card-content white-text">
                            <span className="card-title">Table 10</span>
                            <p>This is where the table requests should go.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col s12 m3 l3">
                        <div className="card tableCard grey darken-3">
                            <div className="card-content white-text">
                            <span className="card-title">Table 11</span>
                            <p>This is where the table requests should go.</p>
                            </div>
                        </div>
                        </div>

                        <div className="col s12 m3 l3">
                        <div className="card tableCard grey darken-3">
                            <div className="card-content white-text">
                            <span className="card-title">Table 12</span>
                            <p>This is where the table requests should go.</p>
                            </div>
                        </div>
                        </div>

                    </div>
                    </div>
                    <div className="col s12 m3 l3">
                    <div className="row alertDiv">

                        <div className="col s12">
                        <div className="top">
                            <img className="responsive-img subLogo" src={alertViewLogo} />
                        </div>
                        <div className="card alertCard red darken-4">
                            <div className="card-content white-text">
                            <span className="card-title">Table 2</span>
                            <p>This is where the alert messages should go. People can stay stuff like their food is burnt, or where's my server?</p>
                            </div>
                        </div>
                        </div>

                        <div className="col s12">
                        <div className="card alertCard red darken-4">
                            <div className="card-content white-text">
                            <span className="card-title">Table 5</span>
                            <p>This is where the alert messages should go. People can stay stuff like their food is burnt, or where's my server?</p>
                            </div>
                        </div>
                        </div>

                        <div className="col s12">
                        <div className="card alertCard red darken-4">
                            <div className="card-content white-text">
                            <span className="card-title">Table 6</span>
                            <p>This is where the alert messages should go. People can stay stuff like their food is burnt, or where's my server?</p>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    </div>
);

export default Restaurant;