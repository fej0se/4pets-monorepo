import { Row, Col, Form, FormControl } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import Responsive from "react-responsive";

import "react-toastify/dist/ReactToastify.css";
import BottomNavi from "../BottomNav";
import "./footer.css";
import cat from "../../assets/catinverse.png";

export const Footer = (props) => {
  let email;
  const schema = Yup.string().email();
  const Desktop = (props) => <Responsive {...props} minWidth={1024} />;
  const Mobile = (props) => <Responsive {...props} maxWidth={1023} />;

  const doSubscribe = (e) => {
    if (e.key === "Enter") {
      email = e.target.value;
      const isEmail = schema.isValidSync(email);
      if (isEmail) {
        toast.success("E-mail cadastrado! 🐱🐶💕", { autoClose: 10000 });
      } else {
        toast.error("Ops! entre com um e-mail válido!", { autoClose: 15000 });
      }
      e.preventDefault();
    }
  };

  return (
    <div>
      <Desktop>
        <div>
          <div className="right">
            <img src={cat} alt="gato feliz mostrando lingua" />
          </div>
          <div className="footerr">
            <img
              alt="cachorro feliz mostrando lingua"
              className="dog1"
              src="https://static.overlay-tech.com/assets/f2762da4-8c03-4615-9825-b52c114e98d3.png"
            />
            <Row>
              <ToastContainer />
              <Col className="flexWrapperTwo">
                <p className="assineANewsletter">Assine a Newsletter</p>
                <p className="coloqueOEmailAbaixo">Coloque o email abaixo</p>

                <Form>
                  <FormControl
                    className="flexWrapperOne formField"
                    type="Email"
                    placeholder="E-mail"
                    value={email}
                    onKeyDown={doSubscribe}
                  />
                </Form>
              </Col>
              <Col className="flexWrapperThree">
                <p className="redesSociais">Redes Sociais</p>
                <div className="redeSocial">
                  <img
                    alt="botao facebook"
                    className="ellipse7"
                    src="https://static.overlay-tech.com/assets/0a6c99e4-ab70-4288-93aa-3fe6d1a6b1d2.png"
                  />
                  <img
                    alt="botao instagram"
                    className="ellipse7"
                    src="https://static.overlay-tech.com/assets/2d46c838-964b-4deb-a44d-d84baa3a5fec.png"
                  />
                  <img
                    alt="botao youtube"
                    className="ellipse7"
                    src="https://static.overlay-tech.com/assets/0fa7147a-d3e0-4850-8cd4-bf2fa7de792d.png"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <BottomNavi location={props.location} />
        <ToastContainer />
      </Mobile>
    </div>
  );
};
