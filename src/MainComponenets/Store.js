import React from 'react';

export default class Store extends React.Component{

    render(){
        return<div>

<section className="page-section cta">
        <div className="container">
            <div className="row">
                <div className="col-xl-9 mx-auto">
                    <div className="text-center cta-inner rounded">
                        <h2 className="section-heading mb-5"><span className="section-heading-upper">Come On In</span><span className="section-heading-lower">We're Open</span></h2>
                        <ul className="list-unstyled text-start mx-auto list-hours mb-5">
                            <li className="d-flex list-unstyled-item list-hours-item">Sunday<span className="ms-auto">Closed</span></li>
                            <li className="d-flex list-unstyled-item list-hours-item">Monday<span className="ms-auto">7:00 AM to 8:00 PM</span></li>
                            <li className="d-flex list-unstyled-item list-hours-item">Tuesday<span className="ms-auto">7:00 AM to 8:00 PM</span></li>
                            <li className="d-flex list-unstyled-item list-hours-item">Wednesday<span className="ms-auto">7:00 AM to 8:00 PM</span></li>
                            <li className="d-flex list-unstyled-item list-hours-item">Thursday<span className="ms-auto">7:00 AM to 8:00 PM</span></li>
                            <li className="d-flex list-unstyled-item list-hours-item">Friday<span className="ms-auto">7:00 AM to 8:00 PM</span></li>
                            <li className="d-flex list-unstyled-item list-hours-item">Saturday<span className="ms-auto">9:00 AM to 5:00 PM</span></li>
                        </ul>
                        <p className="address mb-5"><em><strong>1116 Orchard Street</strong><span><br/>Golden Valley, Minnesota<br/></span></em></p>
                        <p className="address mb-0"><small><em>Call Anytime</em></small><span><br/>(317) 585-8468<br/></span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>



        </div>
    }
}