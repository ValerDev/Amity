import React, { useRef } from "react";
import s from "../TermsPage/TermsPage.module.scss";
import { Footer } from "../Footer/Footer";
import { Header } from "../../components/Header/Header";
export const CookiePolicyPage = () => {
  const homeRef = useRef(null);
  const guideRef = useRef(null);
  const helpRef = useRef(null);
  const weTransportRef = useRef(null);
  const whyAmityRef = useRef(null);
  const redefiningMobilityRef = useRef(null);

  return (
    <div>
      <Header
        homeRef={homeRef}
        guideRef={guideRef}
        helpRef={helpRef}
        weTransportRef={weTransportRef}
        whyAmityRef={whyAmityRef}
        redefiningMobilityRef={redefiningMobilityRef}
        showHeaderLinks={false}
        makeLogoLink={true}
      />
      <div className={s.TermsPage}>
        <h1>Introduction</h1>
        <p>
          Welcome to Amity Transport! This Cookie Policy is designed to inform
          you about how we use cookies and similar tracking technologies on our
          website, <a href="https://amitytransport.com">amitytransport.com</a>.
          By using our website, you consent to the use of cookies as described
          in this policy.
        </p>

        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device when you
          visit a website. They are commonly used to enhance your browsing
          experience, collect information about your preferences, and improve
          website performance.
        </p>

        <h2>Types of Cookies We Use</h2>
        <p>We use the following types of cookies on amitytransport.com:</p>
        <ul>
          <li>
            a. Essential Cookies: These cookies are necessary for the
            functioning of our website and enable you to navigate and use its
            features. They do not collect any personal information.
          </li>
          <li>
            b. Performance Cookies: These cookies help us understand how
            visitors use our website. They collect anonymous data about page
            visits, traffic sources, and user interactions to improve website
            performance.
          </li>
          <li>
            c. Functional Cookies: These cookies allow the website to remember
            your choices, such as language preferences and login credentials.
            They enhance your user experience.
          </li>
          <li>
            d. Targeting Cookies: These cookies are used to deliver content and
            advertisements that are more relevant to you and your interests.
            They may be placed by third-party advertising networks.
          </li>
        </ul>

        <h2>How We Use Cookies</h2>
        <p>We use cookies on amitytransport.com for the following purposes:</p>
        <ul>
          <li>To provide and improve our services.</li>
          <li>To understand how our website is used and to analyze traffic.</li>
          <li>To remember your preferences and settings.</li>
          <li>To deliver personalized content and targeted advertisements.</li>
        </ul>

        <h2>Third-Party Cookies</h2>
        <p>
          We may also allow third-party service providers to place cookies on
          our website to help us analyze and improve our services. These
          third-party cookies are subject to the respective privacy policies of
          the providers.
        </p>

        <h2>Managing Cookies</h2>
        <p>
          You can control and manage cookies through your browser settings.
          Please note that if you disable or reject cookies, some features of
          our website may not function properly. To learn more about how to
          manage cookies, please refer to your browser's help documentation.
        </p>

        <h2>Changes to this Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in our website and practices. We will notify you of any significant
          changes by posting the revised policy on our website with an updated
          "Last Updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests related to our Cookie
          Policy, please contact us at:
        </p>
        <address>
          TRUST CARGO TRUCKING SERVICES INC
          <br />
          DBA AMITY TRANSPORTATION
          <br />
          1200 BRICKELL AVE STE 1950
          <br />
          MIAMI FL 33131
          <br />
          (305) 433 - 3445
          <br />
          <a href="mailto:operations@amitytransport.com">
            operations@amitytransport.com
          </a>
        </address>

        <p>
          By using our website, you consent to our use of cookies as described
          in this Cookie Policy. Thank you for visiting Amity Transport!
        </p>
      </div>
      <Footer weTransportRef={weTransportRef} />
    </div>
  );
};
