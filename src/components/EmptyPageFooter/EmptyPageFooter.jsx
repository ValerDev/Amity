import React from "react";
import s from './EmptyPageFooter.module.scss';
import logoWhite from '../../assets/images/logoWhite.svg';
import facebook from '../../assets/images/Footer/facebook.png';
import message from '../../assets/images/Footer/message.png';
import youtube from '../../assets/images/Footer/youtube.png';
import instagram from '../../assets/images/Footer/instagram.png';
import { Link } from 'react-router-dom';

export const EmptyPageFooter = ({ weTransportRef }) => {
    return <div className={s.EmptyPageFooter}>
        <div className={s.mainFooter} ref={weTransportRef}>
            <div className={s.footerContent}>
                <div className={s.footerBlock1}>
                    <div className={s.imgBlock}>
                        <img src={logoWhite} alt="logoWhite" />
                    </div>

                    <div className={s.links}>
                        <div className={s.aboutUsBlock}>
                            <h3 className={s.title}>About us</h3>
                            <p className={s.description}>Our team consists of experienced logistic specialists and lovely support representatives who are ready to wipe up your daily stress and fill your day with peace of mind.</p>
                        </div>
                        <div className={s.SLBlock}>
                            <div className={s.solutions}>
                                <h3>Solutions</h3>
                                <div className={s.solutionsContent}>
                                    <div className={s.subBlock}>
                                        <h4>For Individuals</h4>
                                        <p>Student</p>
                                        <p>Military</p>
                                    </div>
                                    <div className={s.subBlock}>
                                        <h4>For Businesses</h4>
                                        <p>One-Time</p>
                                        <p>Long term</p>
                                    </div>
                                </div>
                            </div>
                            <div className={s.loose}>
                                <h3>Loose</h3>
                                <div className={s.looseContent}>
                                    <p>Privacy Policy</p>
                                    <Link to="/terms-and-conditions" className={s.link} onClick={() => window.scrollTo(0, 0)}>
                                        Terms and Conditions
                                    </Link>
                                    <p>Cookie policy</p>
                                    <p>Copyright</p>
                                    <p>Terms of Use</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.footerBlock2}>
                    <div className={s.social}>
                        <div className={s.messages}>
                            <img src={message} alt='message' />
                        </div>
                        <div className={s.line} />
                        <div className={s.LSBlock}>
                            <p className={s.license}>
                                © 2023 TRUST CARGO TRUCKING SERVICES INC<br />
                                DBA Amity Transportation<br />
                                1200 Brickell Ave Ste 1950<br />
                                Miami, FL 33131<br />
                            </p>
                            <div className={s.socialMediaBlock}>
                                <img src={youtube} alt="youtube" />
                                <img src={facebook} alt="facebook" />
                                <img src={instagram} alt="instagram" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}