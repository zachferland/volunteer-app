﻿import React, { Component } from 'react';
import {Col, Button, Popover, ButtonToolbar, OverlayTrigger, Overlay, Modal, Input} from 'react-bootstrap';

//TODO Go through all available user fields and add them to this. Follow the same general formatting
//TODO Format this nicer, using scss, but probably wait for Zach to draw up how it should look

const AboutMe = (props) => {
    return (
        <div>
            <img src={'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEKgew92pwh3t6IaIj3PazmaN3yia21164I6mvCkFTTr96s5mG'}  alt="user" className="img-responsive"/>
            <h1>{props.user.name}</h1>
            <div>
                <h2>Profile</h2>
                <strong>My Bio</strong>
                <p>{props.user.bio}</p>
                <strong>Skills</strong>
                <ul>
                    {props.user.skills.map(function(skill, index){
                       return <li key={ index }>{skill}</li>;
                    })}
                </ul>
                <p>
                    <strong>Phone #: </strong>
                    <span>{props.user.phone}</span>
                </p>
                <p>
                    <strong>Email: </strong>
                    <span>{props.user.email}</span>
                </p>
            </div>
            <br/>
            <Button bsStyle='primary' onClick={props.openEdit}>Edit</Button>
        </div>

    );

};


export default AboutMe;