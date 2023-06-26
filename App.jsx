import './App.css';
import React, { useState } from 'react';

function App() {
  const [signUpMode, setSignUpMode] = useState(false);
  const [signUpMode2, setSignUpMode2] = useState(false);

  const handleSignInClick = () => {
    setSignUpMode(false);
    setSignUpMode2(false);
  };

  const handleSignUpClick = () => {
    setSignUpMode(true);
    setSignUpMode2(false);
  };

  const handleSignUp2Click = () => {
    setSignUpMode(false);
    setSignUpMode2(true);
  };

  return (
    <div className={`container ${signUpMode ? 'sign-up-mode' : ''} ${signUpMode2 ? 'sign-up-mode2' : ''}`}>
      <div className="signin-signup">
        <form action="" className="sign-in-form">
          <h2 className="title">Iniciar Sesion</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Registrate" className="btn" />
          <p className="social-text">O inicia sesion con otra plataforma</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="account-text">
            ¿Aun no tienes cuenta? <a href="#" id="sign-up-btn2" onClick={handleSignUp2Click}>Registrate</a>
          </p>
        </form>
        <form action="" className="sign-up-form">
          <h2 className="title">Registrate</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Registrate" className="btn" />
          <p className="social-text">O inicia sesion con otra plataforma</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>¿Ya eres parte de JMC?</h3>
            <p>
              Nuestro principal objetivo es ofrecer a nuestros clientes una
              tranquilidad completa cuando se trata de la seguridad de sus
              hogares. Con nuestros sistemas avanzados, podrás monitorear y
              proteger tu casa las 24 horas del día, los 7 días de la semana.
            </p>
            <button className="btn" id="sign-in-btn" onClick={handleSignInClick}>
              Iniciar Sesion
            </button>
          </div>
          <img src="signin.svg" alt="" className="image" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>¿Nuevo en JMC?</h3>
            <p>
              En JMC System, nos enorgullece ofrecer soluciones de seguridad en
              el hogar confiables, efectivas y fáciles de usar. Nuestro equipo
              de expertos está siempre dispuesto a brindarte asesoramiento
              personalizado y garantizar que el sistema se adapte perfectamente
              a tus necesidades.
            </p>
            <button className="btn" id="sign-up-btn" onClick={handleSignUpClick}>
              Registrate
            </button>
          </div>
          <img src="signup.svg" alt="" className="image" />
        </div>
      </div>
    </div>
  );
}

export default App;
