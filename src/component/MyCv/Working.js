import React from 'react';
import Calendar from '../../styles/icons/calendar.svg';
import './Working.scss';

export default () => {
  return (
    <div className="working-exp">
      <div className="working-exp__title">
        <h1>Working Experience</h1>
      </div>
      <div className="working-exp__jobs">
        <span className="working-exp__company">
          <span className="working-exp__text">
            <h2 className="heading-title">Nextiva</h2>
            <span className="dates">
              <Calendar className="icon-phone" /> <span>08-27-2018</span> {'/'}{' '}
              <span>CURRENT</span>
            </span>
          </span>
          <span className="developer">JavaScript Developer</span>
          <h3>Integrations</h3>
          <p>
            Integrations is a Single Page App build on React JS. This app allow
            Nextiva clients to retrieve all their information from diferent apps
            or systems
          </p>
          <h3>Billing Platform</h3>
          <p>
            Billing Platform is a SPA build on ReactJS which is connected to a
            Spring boot restful api, hosted on AWS{' '}
          </p>

          <small>Direct boss: luis.sensio@nextiva.com</small>
        </span>

        <span className="working-exp__company">
          <span className="working-exp__text">
            <h2 className="heading-title">IBM</h2>
            <Calendar className="icon-phone" /> <span>06-01-2016</span> {'/'}{' '}
            <span>May 2018</span>
          </span>
          <span className="developer">Java Developer</span>
          <h3>PTI</h3>
          <p>
            As a developer at PTI an internal application of IBM for pricing and
            costing the products that IBM sells. We developed a responsive SPA
            on AngularJS & Angular Material, which was consuming a rest API
            builded on NodeJS connected to a DB2 databse.
          </p>
          <small>Direct boss jose.guadalupe.garcia@ibm.com</small>
          <h3>WWPRT</h3>
          <p>
            As a developer at WWPRT I calculated the price and cost of the
            products of that IBM sells, I used Java as main programing language,
            with it I used: Hibernate, Spring, DAOs, Managers for the backend to
            manage the information of a DB2 database. For the frontend I used
            struts, freemaker, Actions. I helped with one of the most important
            requirement for the Cost side of the application in the Saas Query
            Report.
          </p>
          <small>Direct boss jlperedo@mx1.ibm.com</small>
        </span>
      </div>
      <div className="working-exp__title">
        <h1>Education</h1>
      </div>
      <div className="working-exp__text">
        <h3>Universidad Enrique Diaz de Leon</h3>
        <Calendar className="icon-phone" /> <span>2012</span> {'/'}{' '}
        <span>2016</span>
        <p>Degree in Software Engineering</p>
        <h3>Courses</h3>
      </div>
    </div>
  );
};
