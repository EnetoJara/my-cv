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
        </span>
      </div>
    </div>
  );
};
