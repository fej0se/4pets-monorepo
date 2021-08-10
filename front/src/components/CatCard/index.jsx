import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./catcard.css";

export const CatCard = (props) => {
  const history = useHistory();

  const handlerProductRedirect = () => {
    history.push(`/${props.department}/${props.cat.linkName}`);
  };

  return (
    <div className="child col-lg-4 mb-5">
      <div
        className="card shadow cardcat"
        style={{ width: "432px", height: "246px" }}
      >
        <div className="cccontainer">
          <div>
            <img
              className="imagemcat"
              src={props.cat.image}
              alt="imagem da categoria"
            />
          </div>
          <div className="cctxt">
            <h5 className="card-title ">{props.cat.name}</h5>

            <p className="card-text ">{props.cat.description}</p>

            <div className="d-flex justify-content-center ">
              <Button onClick={handlerProductRedirect} className="btnactive">
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
