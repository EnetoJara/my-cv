import React from 'react';
import { default as AvionIcon } from '../../styles/icons/airplane.svg';
import { default as MacIcon } from '../../styles/icons/appleinc.svg';
import { default as EvilIcon } from '../../styles/icons/evil.svg';
import { default as GIcon } from '../../styles/icons/google3.svg';
import { default as HomeIcon } from '../../styles/icons/home3.svg';
import { default as TruckIcon } from '../../styles/icons/truck.svg';
import { default as TuxIcon } from '../../styles/icons/tux.svg';
import { default as PhoneIcon } from '../../styles/icons/whatsapp.svg';

export default () => {
  return (
    <div>
      <p className="my-cv-section-about-me light">
        Develop my training and experience in a company that offers prospects
        and professional development, as well as partnership and teamwork.
      </p>
      <div className="info-icon">
        <TuxIcon className="icon-phone" />
        <h6 className="my-cv-section-about-me bold">Software Developer</h6>
      </div>
      <div className="info-icon">
        <HomeIcon className="icon-phone" />
        <h6 className="my-cv-section-about-me bold">Guadalajara Jal.</h6>
      </div>

      <div className="info-icon">
        <GIcon className="icon-phone" />
        <h6 className="my-cv-section-about-me bold">
          ernesto.jara06@gmail.com
        </h6>
      </div>
      <div className="info-icon">
        <PhoneIcon className="icon-phone" />
        <h6 className="my-cv-section-about-me bold">044 33 13 867831</h6>
      </div>

      <span className="info-icon">
        <EvilIcon className="icon-phone" />
        <h6 className="my-cv-section-about-me bold">
          I is Looking for them good bread!
        </h6>
      </span>

      <span className="info-icon">
        <TruckIcon className="icon-phone" />
        <p className="my-cv-section-about-me">own car</p>
      </span>

      <span className="info-icon">
        <AvionIcon className="icon-phone" />
        <p className="my-cv-section-about-me">travel yes</p>
      </span>

      <span className="info-icon">
        <MacIcon className="icon-phone" />
        <p className="my-cv-section-about-me">Mac Lover</p>
      </span>
    </div>
  );
};
