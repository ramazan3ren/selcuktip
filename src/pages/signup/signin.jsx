import React, { useState } from "react";
import "bulma/css/bulma.css";
import NewCard from "./newCard";
import OldCard from "./oldCard";
import ForeignCard from "./foreignCard";
import back from "../../assets/chevron-left.svg";
import { Link } from "react-router-dom";

function SignIn() {
  const [card, setCard] = useState("newCard");
  return (
    <>
      <div className="sign">
        <div className="textAndBack">
          <Link to='/'>
            <img src={back} />
          </Link>

          <p className="title">Kayıt Ol</p>
        </div>
        <div className="cardButtons">
          <button onClick={() => setCard("oldCard")}>
            Eski Kimlik İle Kayıt Ol
          </button>
          <button onClick={() => setCard("newCard")}>
            Yeni Kimlik İle Kayıt Ol
          </button>
          <button onClick={() => setCard("foreignCard")}>
            Yabancı Uyruklu Hasta Kayıt
          </button>
        </div>

        <div>
          {card === "newCard" ? (
            <NewCard />
          ) : card === "oldCard" ? (
            <OldCard />
          ) : (
            <ForeignCard />
          )}
        </div>
      </div>
    </>
  );
}

export default SignIn;
