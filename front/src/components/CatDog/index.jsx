import roundDog from "../../assets/rounddog.png";
import roundCat from "../../assets/roundcat.png";
import cat from "../../assets/cat.png";

import "./catdog.css";

export const CatDog = () => {
  return (
    <div>
      <div className="whatis">
        <div className="whatischildren">
          <span>O que é 4Pets?</span>
          <p>
            4Pets é uma vitrine digital onde você pode encontrar roupas e
            acessórios para gatos e cachorros
          </p>
        </div>
        <div className="whatischildren">
          <img src={cat} alt="" />
        </div>
        <div className="whatischildren">
          <span>Como funciona</span>
          <p>
            Você escolhe no nosso site a roupa que mais gostar e é redirecionado
            para a loja onde ela está disponível
          </p>
        </div>
      </div>
      <div className="cdcontainer">
        <div className="cdtitle">
          <p>Escolha seu pet</p>
        </div>
        <div className="top">
          <div>
            <a href="./departamento/gatos">
              <img src={roundCat} alt="" />
            </a>
            <p className="txt">Gato</p>
          </div>
          <div>
            <a href="./departamento/caes">
              <img src={roundDog} alt="" />
            </a>
            <p className="txt">Cachorro</p>
          </div>
        </div>
      </div>
    </div>
  );
};
