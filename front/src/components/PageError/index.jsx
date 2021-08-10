import error from "../../assets/error.png";
import "./error.css";

export const PageError = (props) => {
  const message =
    props.error === "404"
      ? "Não encontramos nenhum produto, tente novamente."
      : "Ocorreu um erro durante a exibição da tela! Para continuar recarregue a página ou vá para outra página!";
  return (
    <div className="errorcontainer">
      <div className="row errorcomponent">
        <img src={error} alt="cachorro triste" />
        <p className="bigtext">Ah não!</p>
        <p className="textLower">{message}</p>
        <div onClick={() => window.history.back()} className="btnrecarregar">
          <div className="formabotao">
            <p className="textbtnn">Voltar</p>
          </div>
        </div>
      </div>
    </div>
  );
};
