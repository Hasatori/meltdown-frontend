import React from 'react';
import './About.css'
import {MDBCol, MDBRow, MDBTypography} from "mdbreact";
import {Link} from 'react-router-dom';
import logo from '../../assets/images/common/logo.png'
import {AppProps} from "../../index";
import {connect} from "react-redux";
import {Routes} from "../../util/Constants";
import {Trans, useTranslation} from "react-i18next";

function About(appProps: AppProps) {
    const {t, i18n} = useTranslation();
    return (
        <section className='d-flex flex-column justify-content-center '>
            <section>
                <h2 className="h2-responsive color-primary bold mb-4">Historie</h2>
                <p className='text-long'>Meltdown je světově známá <b>punk-rock-jazz-tůl-pop-mentalová</b> kapela. Její
                    vznik se datuje k 6.6.666.
                </p>
            </section>
            <div className="divider"/>
            <section>
                <h2 className="h2-responsive color-primary bold mb-4">Styl</h2>
                <p className="text-long">
                    Kapela se vyznačuje stylem "shit-covering", neboli děláním špatných coverů dobrých písní. Zaměřuje
                    se zejména na mršení písní od Tool (nebo jak jej kapela sama pracovně nazývá "Tůl", popřípadě
                    "Stůl").
                </p>
            </section>
        </section>

    )
}

export default connect()(About)
