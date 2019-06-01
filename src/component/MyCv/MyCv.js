import React, { Component } from 'react';
import './MyCv.scss';

class MyCv extends Component {
  render() {
    return (
      <div className="my-cv-section">
        <div className="my-cv-section-aside">
          <img src="./images/profile.jpg" />
          <h1 className="title-name">Ernesto Jara Olveda</h1>
          <div>
            <p className="my-cv-section-about-me light">
              Develop my training and experience in a company that offers
              prospects and professional development, as well as partnership and
              teamwork.
            </p>

            <p className="my-cv-section-about-me bold">Software Developer</p>
            <p className="my-cv-section-about-me bold">Guadalajara Jal.</p>
            <p className="my-cv-section-about-me bold">
              ernesto.jara06@gmail.com
            </p>
            <p className="my-cv-section-about-me bold">044 33 13 867831</p>
            <p className="my-cv-section-about-me light">
              <span className="ft-size bold">*</span> I is looking for them good
              bread!
            </p>
          </div>
          <div className="my-cv-section-languages">
            <ul>
              <li>
                <div className="level">
                  <div className="my-level ochenta">
                    <span className="value">js 80%</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="level">
                  <div className="my-level siete-cinco">
                    <span className="value">css 75%</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="level">
                  <div className="my-level noventa">
                    <span className="value">html 90%</span>
                  </div>
                </div>
              </li>
              <li>Node JS</li>
              <li>Angunlar</li>
              <li>Angunlar JS</li>
              <li>React</li>
              <li>SQL MySQL, SQL Server, BD2, Postgress</li>
              <li>MondoDB, Cassandra</li>
            </ul>
          </div>
        </div>
        <div className="my-cv-section-main">main</div>
      </div>
    );
  }
}

export default MyCv;
