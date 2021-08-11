import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Modal from "react-modal";
import Responsive from "react-responsive";
import api from "../../services/api";

import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import sizeimg from "../../assets/sizes.png";
import line from "../../assets/line.png";
import dogmodal from "../../assets/modaldog.png";
import first from "../../assets/first.png";
import secondary from "../../assets/secondary.png";
import { PageError } from "../../components/PageError";

import "./styles.css";

//...

const Product = () => {
  const { id } = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get(`store/product/${id}`)
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("404");
        setLoading(false);
        return;
      });
  }, []);

  const Desktop = (props) => <Responsive {...props} minWidth={1024} />;
  const Mobile = (props) => <Responsive {...props} maxWidth={1023} />;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleClick = (event) => {
    window.open(`${data.linkToProd}`, "_blank");
  };

  function openModal() {
    setIsOpen(true);
    const body = document.body;
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    const body = document.body;
    body.style.height = "";
    body.style.overflowY = "";
  }

  function Cat(props) {
    return (
      <>
        <div className="sizes">
          <div className="size" style={{ "background-color": "#fcc869" }}>
            <span>ÚNICO</span>
          </div>
        </div>
      </>
    );
  }

  function Dog(props) {
    const { sizes } = props;
    return (
      <>
        <div
          className="size"
          style={{
            "background-color": sizes.some((e) => e.size === "P")
              ? "#fcc869"
              : "#E87171",
          }}
        >
          <span>P</span>
        </div>
        <div
          className="size"
          style={{
            "background-color": sizes.some((e) => e.size === "M")
              ? "#fcc869"
              : "#E87171",
          }}
        >
          <span>M</span>
        </div>
        <div
          className="size"
          style={{
            "background-color": sizes.some((e) => e.size === "G")
              ? "#fcc869"
              : "#E87171",
          }}
        >
          <span>G</span>
        </div>
        <div
          className="size"
          style={{
            "background-color": sizes.some((e) => e.size === "GG")
              ? "#fcc869"
              : "#E87171",
          }}
        >
          <span>GG</span>
        </div>
      </>
    );
  }

  function RenderSizes(props) {
    const { type, data } = props;

    if (type === "Dogs") {
      return (
        <div>
          <div className="sizes">
            <Dog sizes={data} />
          </div>
          <div onClick={() => openModal()} className="sizemodalbtn">
            <span className="text">Medidas</span>
            <img src={sizeimg} alt="regua de medida" />
          </div>
        </div>
      );
    }
    return <Cat />;
  }

  if (isLoading) {
    return <div className="App">Carregando...</div>;
  }

  if (error) {
    return (
      <>
        <Nav />
        <PageError error={error} />
        <Footer />{" "}
      </>
    );
  }

  return (
    <div>
      <Nav />
      <Desktop>
        <div className="productcontainer">
          <div className="title">
            <p className="producttitle">{data.name}</p>
          </div>
          <div className="productfirst just">
            <div className="productphoto">
              <img src={data.image} alt={data.name} />
            </div>
            <div className="productdesc textcontainer">
              <p className="desctxt">Descrição</p>
              <p className="text">
                <span
                  dangerouslySetInnerHTML={{
                    __html: data.description,
                  }}
                ></span>
              </p>
              <p className="desctxt2">Tamanhos</p>
              <RenderSizes
                type={data.category.department.name}
                data={data.sizes}
              />
              <div className="storeinfo">
                <p className="texttostore">
                  Vendido por <span>{data.storeName}</span>
                </p>
                <Button className="prodbtnactive" onClick={handleClick}>
                  Clique aqui para comprar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Desktop>

      <Mobile>
        <div className="title">
          <p className="producttitle">{data.name}</p>
        </div>
        <div className="productMobi">
          <img src={data.image} alt={data.name} />
          <p className="sizetxt">Tamanho</p>
          <RenderSizes isDog={true} />

          <div className=" textcontainerMobi">
            <p className="desctxt">Descrição</p>
            <p className="text">{data.description}</p>
            <div className="storeinfo">
              <p className="texttostore">
                Vendido por <span>{data.storeName}</span>
              </p>
              <Button className="prodbtnactive">
                Clique aqui para comprar
              </Button>
            </div>
          </div>
        </div>
      </Mobile>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modall">
          <div className="closebutton">
            <span onClick={() => closeModal()} className="modalclose">
              X
            </span>
          </div>
          <h3 className="modaltitle">Tabela de medidas</h3>
          <img src={line} alt="linha" />
          <div className="modallcont">
            <div className="modalfirst">
              <Form>
                <Form.Select
                  className="modalform modalformtxt"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="" default="default">
                    Dúvida no tamanho?
                  </option>
                  <option value="" disabled="true">
                    Escolha uma raça abaixo:
                  </option>
                  <option value="G">Akita</option>
                  <option value="PP">Affenpinscher</option>
                  <option value="G">American bully</option>
                  <option value="P">Basenji</option>
                  <option value="P">Basset hound</option>
                  <option value="P">Beagle</option>
                  <option value="G">Bearded collie</option>
                  <option value="G">Bernese</option>
                  <option value="P">Bichon frisé</option>
                  <option value="P">Bichon havanês</option>
                  <option value="G">Border collie</option>
                  <option value="G">Boiadeiro australiano</option>
                  <option value="P">Boston terrier</option>
                  <option value="G">Boxer</option>
                  <option value="G">Bull terrier</option>
                  <option value="G">Bulldog francês</option>
                  <option value="G">Bulldog inglês</option>
                  <option value="P">Cão de crista chinês</option>
                  <option value="G">Cane corso italiano</option>
                  <option value="P">Cairn terrier</option>
                  <option value="P">Cavalier king charles</option>
                  <option value="PP">Chihuahua</option>
                  <option value="G">Chow chow</option>
                  <option value="P">Cocker spaniel</option>
                  <option value="G">Collie</option>
                  <option value="P">Corgi</option>
                  <option value="P">Coton de tulear</option>
                  <option value="G">Dálmata</option>
                  <option value="P">Dachshund</option>
                  <option value="G">Dobermann</option>
                  <option value="G">Dogo argentino</option>
                  <option value="G">Dogue alemão</option>
                  <option value="P">Fox terrier</option>
                  <option value="G">Foxhound</option>
                  <option value="P">Galgo</option>
                  <option value="G">Golden retriever</option>
                  <option value="P">Griffon de bruxelas</option>
                  <option value="G">Husky siberiano</option>
                  <option value="P">Jack russell</option>
                  <option value="G">Kuvasz</option>
                  <option value="G">Labrador</option>
                  <option value="P">Lhasa apso</option>
                  <option value="PP">Lulu da pomerânia</option>
                  <option value="G">Leão da rodésia</option>
                  <option value="G">Malamute do alasca</option>
                  <option value="maltes">Maltês</option>
                  <option value="G">Mastim napolitano</option>
                  <option value="P">Norfolk terrier</option>
                  <option value="P">Nova scotia dtr</option>
                  <option value="G">Pastor da nova zelândia</option>
                  <option value="G">Pastor inglês</option>
                  <option value="G">Pastor australiano</option>
                  <option value="G">Pastor alemão</option>
                  <option value="G">Pastor belga</option>
                  <option value="G">Pastor branco suiço</option>
                  <option value="P">Pastor de shetland</option>
                  <option value="P">Pequinês</option>
                  <option value="G">Perdigueiro</option>
                  <option value="G">Pointer inglês</option>
                  <option value="PP">Pinscher</option>
                  <option value="G">Pitbull</option>
                  <option value="P">Podengo português</option>
                  <option value="P">Poodle</option>
                  <option value="P">Pug</option>
                  <option value="G">Rottweiler</option>
                  <option value="G">Samoieda</option>
                  <option value="G">São bernardo</option>
                  <option value="P">Schnauzer</option>
                  <option value="P">Scottish terrier</option>
                  <option value="G">Setter irlandês</option>
                  <option value="G">Staffordshire</option>
                  <option value="G">Staffordshire bull terrier</option>
                  <option value="G">Shar pei</option>
                  <option value="P">Shih tzu</option>
                  <option value="P">Shiba inu</option>
                  <option value="P">Spaniel bretão</option>
                  <option value="PP">Spitz alemão</option>
                  <option value="P">Spitz japonês</option>
                  <option value="P">Teckel</option>
                  <option value="G">Terra-nova</option>
                  <option value="P">Terrier brasileiro</option>
                  <option value="P">Terrier tibetano</option>
                  <option value="G">Vizsla</option>
                  <option value="G">Weimaraner</option>
                  <option value="P">West highland terrier</option>
                  <option value="P">Whippet</option>
                  <option value="PP">Yorkshire</option>
                </Form.Select>
              </Form>
              <p>PESCOÇO</p>
              <img src={first} alt="tabela pescoco" />

              <p>PEITO</p>
              <img src={secondary} alt="tabela peito" />
            </div>
            <div className="modalsecond">
              <div className="recsize">
                <p>Tamanho Recomendado</p>

                <span>{size ? size : "-"}</span>
              </div>
              <img src={dogmodal} alt="cachorro modelo medida" />
            </div>
          </div>
        </div>
      </Modal>

      <Footer />
    </div>
  );
};

export default Product;
