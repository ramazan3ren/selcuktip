import React from "react";
import "bulma/css/bulma.css";
import "../assets/css/navbar.css";
import logo from "../assets/logo.png";
import tur from "../assets/turkey.png";
import uk from "../assets/united-kingdom.png";
import syr from "../assets/syria.png";
import ger from "../assets/german.png";
import { Link, Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <>
      <section className="hero is-small is-info">
        <div className="hero-body">
          <img src={logo} className="img" />
          <div>
            <p className="title">SELÇUK ÜNİVERSİTESİ TIP FAKÜLTESİ HASTANESİ</p>
            <p className="subtitle">Randevu Al</p>
          </div>
          <div className="flag-icon">
            <Link>
              <img src={tur} />
            </Link>
            <Link>
              <img src={uk} />
            </Link>
            <Link>
              <img src={syr} />
            </Link>
            <Link>
              <img src={ger} />
            </Link>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default MainLayout;
