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
                <MDBRow className='flex-row'>
                    <MDBCol size='6'><p className='text-long'>Meltdown je světově známá <b>punk-rock-jazz-tůl-pop-mentalová</b> kapela. Její vznik se datuje k 6.6.666, kdy
                    během krvavého rituálu
                    </p></MDBCol>
                    <MDBCol size='4'>
                        <img src={logo} width='80%' className='center-image' loading={"lazy"}/></MDBCol>

                </MDBRow>
            </section>
            <div className="divider"/>
            <section>
                <h2 className="h2-responsive color-primary bold mb-4">Styl</h2>
                <p className="text-long">
                    Kapela se vyznačuje děláním špatných coverů dobrých písní. Zaměřuje se zejména na mršení písní od Tool (nebo jak jej kapela sama pracovně nazývá "Tůl", popřípadě "Stůl").
                </p>
            </section>
            <div className="divider"/>
            <section id="supported-functionalities">
                <h2 className="h2-responsive color-primary bold mb-4">Členové</h2>
                <p className="text-long">
                    <Trans
                        i18nKey="ns1:supportedFunctionalitiesParagraph"
                        components={{
                            loginLink: <Link to={Routes.LOGIN}/>,
                            signUpLink: <Link to={Routes.SIGNUP}/>
                        }}/>
                </p>
                <p>{t('ns1:supportedFunctionalitiesListHeading', {})}</p>
                <ul>
                    <li>{t('ns1:loginHeading')}</li>
                    <li>{t('ns1:signupHeading')}</li>
                    <li>{t('ns1:forgottenPasswordHeading')}</li>
                    <li>O2Auth Facebook, Google and Github</li>
                    <li>{t('ns1:manageProfileHeading')}
                        <ul>
                            <li>{t('ns1:profileDescription')}</li>
                            <li>{t('ns1:twoFactorAuthenticationLabel')}</li>
                            <li>{t('ns1:closeAccountHeading')}</li>
                        </ul>
                    </li>
                </ul>
            </section>
            <div className="divider"/>
            <section id="react">
                <h2 className="h2-responsive color-primary bold mb-4">React</h2>
                <Trans className="text-long"
                    i18nKey="ns1:reactParagraph"
                    components={{
                        githubLink: <a href="https://github.com/Hasatori/full-stack-template-frontend-react" target="_blank"/>,
                        p: <p className="text-long"/>
                    }}/>
            </section>
            <div className="divider"/>
            <section id='spring-boot'>
                <h2 className="h2-responsive color-primary bold mb-4">Spring boot</h2>
                <Trans className="text-long"
                    i18nKey="ns1:springBootParagraph"
                    components={{
                        githubLink: <a href="https://github.com/Hasatori/full-stack-template-backend-spring" target="_blank"/>,
                        p: <p className="text-long"/>
                    }}/>

            </section>
        </section>

    )
}

export default connect()(About)
