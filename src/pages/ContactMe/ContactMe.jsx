import React from "react";
import './ContactMe.css';
import ConnectImg from '../../assets/intro-2.png';
import Image from 'react-bootstrap/Image'
import SectionSeperator from '../../components/SectionSeperator/SectionSeperator.jsx'

function Contact()
{
    return (
        <>
        <div id="contact">
            <SectionSeperator/>
            <div className="background">
                <div className="container">
                    <div className="screen">
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>LET'S</span>
                                    <span>CONNECT </span>
                                </div>
                                <div className="app-contact">
                                    < Image src={ConnectImg} fluid style={{width:'50%'}} />
                                </div>
                            </div>
                            <div className="screen-body-item">
                                <div className="app-form">
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="NAME"/>
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="EMAIL"/>
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="CONTACT NO"/>
                                    </div>
                                    <div className="app-form-group message">
                                        <input className="app-form-control" placeholder="MESSAGE"/>
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button className="app-form-button">CANCEL</button>
                                        <button className="app-form-button">SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Contact;