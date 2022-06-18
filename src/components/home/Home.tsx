import React from 'react';
import './Home.css'
import {MDBCol, MDBRow, MDBTypography} from "mdbreact";
import {Link} from 'react-router-dom';
import logo from '../../assets/images/common/logo.png'
import {connect} from "react-redux";
import {Trans, useTranslation} from "react-i18next";

function Home() {
    const {t, i18n} = useTranslation();
    return (
        <section className='d-flex flex-column justify-content-center '>
            <section>
                <img src={logo} width='80%' className='center-image' loading={"lazy"}/>
            </section>
            <div className="divider"/>
        </section>

    )
}

export default connect()(Home)
