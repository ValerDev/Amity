import React, { useRef } from 'react';
import s from '../TermsPage/TermsPage.module.scss';
import sHome from '../Home/Home.module.scss';
import { Footer } from '../Footer/Footer';
import { Header } from "../../components/Header/Header";
export const PrivacyPolicyPage = () => {

    const homeRef = useRef(null);
    const guideRef = useRef(null);
    const helpRef = useRef(null);
    const weTransportRef = useRef(null);
    const whyAmityRef = useRef(null);
    const redefiningMobilityRef = useRef(null);

    return (
        <div>
			<div className={sHome.home} ref={homeRef}>
				<Header homeRef={homeRef} guideRef={guideRef} helpRef={helpRef} weTransportRef={weTransportRef} whyAmityRef={whyAmityRef} redefiningMobilityRef={redefiningMobilityRef} showHeaderLinks={false} makeLogoLink={true} />
			</div>
            <div className={s.TermsPage}>
				<h1>Introduction</h1>
				<p>Welcome to Amity Transport! This Privacy Policy is designed to inform you about how we collect, use, disclose, and safeguard your personal information when you visit our website, amitytransport.com, and use our services. By using our website and services, you agree to the practices described in this policy.</p>
				
				<h2>Information We Collect</h2>
				<p>We may collect the following types of information when you visit our website or use our services:</p>
				<ol type="a">
					<li>Personal Information: This includes your name, email address, phone number, and any other information you voluntarily provide to us.</li>
					<li>Usage Information: We may collect information about your interactions with our website, such as your IP address, browser type, device type, and pages you visit.</li>
					<li>Cookies and Tracking Technologies: We use cookies and similar technologies to collect information about your browsing habits and preferences. Please refer to our <a href="cookie-policy.html">Cookie Policy</a> for more details.</li>
				</ol>
				
				<h2>How We Use Your Information</h2>
				<p>We may use your personal information for the following purposes:</p>
				<ul>
					<li>To provide and improve our services.</li>
					<li>To respond to your inquiries and requests.</li>
					<li>To communicate with you regarding updates, promotions, and newsletters.</li>
					<li>To analyze website usage and improve our website's functionality.</li>
					<li>To protect the security and integrity of our website.</li>
				</ul>
				
				<h2>Sharing Your Information</h2>
				<p>We may share your personal information with the following parties:</p>
				<ul>
					<li>Service Providers: We may share information with third-party service providers who assist us in delivering our services and improving our website.</li>
					<li>Legal Compliance: We may share your information when required by law, legal process, or government authorities.</li>
					<li>Business Transfers: In the event of a merger, acquisition, or sale of our company, your information may be transferred to the acquiring entity.</li>
				</ul>
				
				<h2>Security</h2>
				<p>We take reasonable steps to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of data transmission over the internet is entirely secure, and we cannot guarantee the security of your information.</p>
				
				<h2>Your Choices</h2>
				<p>You have the following rights regarding your personal information:</p>
				<ul>
					<li>Access and Correction: You can access and correct your personal information by contacting us.</li>
					<li>Opt-Out: You can opt-out of receiving promotional emails from us by following the unsubscribe instructions in the email.</li>
				</ul>
				
				<h2>Children's Privacy</h2>
				<p>Our website and services are not intended for children under the age of 13. We do not knowingly collect or store personal information from children.</p>
				
				<h2>Changes to this Privacy Policy</h2>
				<p>We may update this Privacy Policy to reflect changes in our practices. We will notify you of any significant changes by posting the revised policy on our website with an updated "Last Updated" date.</p>
				
				<h2>Contact Us</h2>
				<p>If you have any questions, concerns, or requests related to our Privacy Policy, please contact us at:</p>
				<address>
					TRUST CARGO TRUCKING SERVICES INC<br />
					DBA AMITY TRANSPORTATION<br />
					1200 BRICKELL AVE STE 1950<br />
					MIAMI FL 33131<br />
					(305) 433 - 3445<br />
					<a href="mailto:operations@amitytransport.com">operations@amitytransport.com</a>
				</address>
				
				<p>Thank you for visiting Amity Transport and for your trust in our services. Your privacy is important to us, and we are committed to protecting your personal information.</p>
			</div>
            <Footer weTransportRef={weTransportRef} />
        </div>
    )
}