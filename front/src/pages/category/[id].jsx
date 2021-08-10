import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import Responsive from "react-responsive";
import api from "../../services/api";

import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import cat from "../../assets/bannercat.png";
import cat2 from "../../assets/bannercat2.png";
import dog from "../../assets/bannerdog.png";
import dog2 from "../../assets/bannerdog2.png";
import catbtn from "../../assets/catbtn.png";
import dogbtn from "../../assets/dogbtn.png";
import { Card } from "../../components/Card";
import { PageError } from "../../components/PageError";

import "./styles.css";

const Category = () => {
  const { departamento, categoria } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [error, setError] = useState(false);

  const Desktop = (props) => <Responsive {...props} minWidth={1024} />;
  const Mobile = (props) => <Responsive {...props} maxWidth={1023} />;

  function getCategory(value) {
    switch (value) {
      case "verao":
        return 1;
      case "inverno":
        return 2;
      case "diversos":
        return 3;
      case "acessorios":
        return 4;
      default:
        return null;
    }
  }

  const category = getCategory(categoria);

  const load =
    departamento === "caes"
      ? {
          id: 1,
          img: dog,
          img2: dog2,
          button: dogbtn,
          btntitle: "Cães",
          deptoname: "caes",
          rollbacklink: 2,
          color: "#92c2ac",
        }
      : {
          id: 2,
          img: cat,
          img2: cat2,
          button: catbtn,
          btntitle: "Gatos",
          dptoname: "gatos",
          color: "#EEAD73",
          rollbacklink: 1,
        };

  useEffect(() => {
    api
      .get(
        `/store/findBy?limit=6&department=${load.id}&category=${category}&page=1&by=id&order=DESC`
      )
      .then((response) => {
        if (response.data.data.products.lenght === 0) {
          setError("404");
          setLoading(false);
          return;
        }
        setData(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("500");
        setLoading(false);
        return;
      });
  }, []);

  if (isLoading) {
    return <div className="App">Carregando...</div>;
  }

  if (error) {
    return (
      <>
        <Nav />
        <PageError error={error} />
        <Footer />
      </>
    );
  }

  return (
    <div>
      <Nav />
      <Desktop>
        <div>
          <div className="catcontainer">
            <div className="btnback">
              <div className="btnform" style={{ color: load.color }}>
                <div>
                  <img src={load.button} alt="botao cachorro/gato" />
                </div>
                <div>
                  <p>Voltar para {load.btntitle}</p>
                </div>
              </div>
            </div>
            <div className="bannercat">
              <img src={load.img} alt="banner" />
              <img src={load.img2} alt="banner" />
            </div>

            <div className="prodsrender">
              <h3>{data.products[0].category.name}</h3>
              <Row xs={1} md={2} className="prods g-4">
                {data.products.map((prod, index) => (
                  <Card key={index} prod={prod} />
                ))}
              </Row>
            </div>
          </div>
        </div>
      </Desktop>

      <Mobile>
        <div className="fixfooter">
          <div className="back" style={{ color: load.color }}>
            <div>
              <img src={load.button} alt="botao cachorro/gato" />
            </div>
            <div>
              <a href={`../departamento/${load.deptoname}`}>
                Voltar para {load.btntitle}
              </a>
            </div>
          </div>
          <div className="catprods">
            <h1>Recomendado</h1>
            <div className="prods scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
              {data.featured.map((prod, index) => (
                <Card key={index} prod={prod} />
              ))}
            </div>
            <h1>Lista de produtos</h1>
            <div className="prods scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
              {data.products.map((prod, index) => (
                <Card key={index} prod={prod} />
              ))}
            </div>
          </div>
        </div>
      </Mobile>
      <Footer />
    </div>
  );
};

export default Category;
