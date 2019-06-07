import React from 'react';
import './Design1.scss';
export default function() {
  return (
    <div className="car">
      <div className="car-header">
        <div className="car-header__top">
          <div>
            <img src="./images/logo.jpg" />
          </div>
          <div>
            <img src="./images/cart.png" />
          </div>
        </div>
        <div className="car-header__bottom">
          <div className="hero">
            <h2>Aprende algo nuevo</h2>
            <p>Todos los cursos a $15</p>
            <div className="form">
              <input
                className="form-input"
                type="text"
                placeholder="¿Que te gustaría Aprender?"
              />
              <img className="form__lupa" src="./images/lupa.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="car-icons">
        <div className="car-icons__section">
          <img src="./images/icono1.png" />
          <p>
            20,000 Cursos en línea
            <br />
            Explora los temas más recientes
          </p>
        </div>
        <div className="car-icons__section">
          <img src="./images/icono2.png" />
          <p>
            Instructores Expertos
            <br />
            Aprende con distintos estilos
          </p>
        </div>
        <div className="car-icons__section">
          <img src="./images/icono3.png" />
          <p>
            Acceso de por vida
            <br />
            Aprende a tu ritmo
          </p>
        </div>
      </div>
    </div>
  );
}
