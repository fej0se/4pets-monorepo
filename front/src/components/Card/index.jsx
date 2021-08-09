import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./card.css";

export const Card = (props) => {
  const history = useHistory();

  const handlerProductRedirect = () => {
    history.push(`/produto/${props.prod.id}`);
  };

  let catcolor;

  if (props.prod.category.name.includes("Inverno")) {
    catcolor = "#A8CEDA";
  } else if (props.prod.category.name.includes("Verão")) {
    catcolor = "#FFB935";
  } else if (props.prod.category.name.includes("Diversos")) {
    catcolor = "#84440B";
  } else {
    catcolor = "#13603D";
  }

  return (
    <div className="col-lg-4 mb-5">
      <div className="card shadow cardprod">
        <div className="prodcat" style={{ background: catcolor }}>
          <p>{props.prod.category.name}</p>
        </div>
        <img className="imagem" src={props.prod.image} alt="..." />
        <div className="card-body p-4">
          <h5 className="card-title titletext">{props.prod.name}</h5>

          <p className="card-text descriptiontext">{props.prod.description}</p>

          <div className="d-flex justify-content-center btnbottom">
            <Button onClick={handlerProductRedirect} className="btnactive">
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
