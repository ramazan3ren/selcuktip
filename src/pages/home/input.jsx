import React from "react";
import "bulma/css/bulma.css";
import "../../assets/css/navbar.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

function Body() {
  return (
    <>
      <div>
        <div className="field">
          <label className="label">T.C. Kimlik Numarası</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="Lütfen Kimlik Numaranızı Giriniz..."
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Şifre</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Lütfen Şifrenizi Giriniz..."
            />
          </div>
          <div>
            <Link className="forgot">Şifremi Unuttum</Link>
          </div>
        </div>

        <div className="field">
          <div className="recaptcha">
            <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
          </div>
        </div>

        <div className="buttons">
          <Link className="loginButton">Giriş Yap</Link>
        </div>

        <div className="centerButton">
          <Link className="noSignButton">Kayıt Olmadan Devam Et</Link>{" "}
          <Link className="signinButton" to="kayitol">
            Kayıt Ol
          </Link>
        </div>
      </div>
    </>
  );
}

export default Body;
