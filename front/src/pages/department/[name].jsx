import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Row } from "react-bootstrap";
import Responsive from "react-responsive";
import api from "../../services/api";

import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Card } from "../../components/Card";
import { CatCard } from "../../components/CatCard";
import { PageError } from "../../components/PageError";

import cat from "../../assets/bannercat.png";
import dog from "../../assets/bannerdog.png";
import catbtn from "../../assets/catbtn.png";
import dogbtn from "../../assets/dogbtn.png";
import dogverao from "../../assets/dogverao.png";
import doginverno from "../../assets/doginverno.png";
import dogacessorios from "../../assets/dogacessorios.png";
import dogdiversos from "../../assets/dogdiversos.png";
import catverao from "../../assets/catverao.png";
import catinverno from "../../assets/catinverno.png";
import catacessorios from "../../assets/catacessorios.png";
import catdiversos from "../../assets/catdiversos.png";

import "./styles.css";
//...

const Department = () => {
  const { name } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  const history = useHistory();

  const Desktop = (props) => <Responsive {...props} minWidth={1024} />;
  const Mobile = (props) => <Responsive {...props} maxWidth={1023} />;

  const load =
    name === "caes"
      ? {
          id: 1,
          img: dog,
          button: catbtn,
          rollbacklink: 2,
          btntitle: "gatos",
          color: "#92c2ac",
          images: {
            verao: dogverao,
            inverno: doginverno,
            acessorios: dogacessorios,
            diversos: dogdiversos,
          },
        }
      : {
          id: 2,
          img: cat,
          button: dogbtn,
          btntitle: "cachorros",
          rollbacklink: 1,
          color: "#EEAD73",
          images: {
            verao: catverao,
            inverno: catinverno,
            acessorios: catacessorios,
            diversos: catdiversos,
          },
        };

  const loadMobile =
    name === "caes"
      ? {
          id: 1,
          img: dog,
          rollbacklink: 2,
          button: catbtn,
          btntitle: "cachorros",
          color: "#92c2ac",
        }
      : {
          id: 2,
          img: cat,
          rollbacklink: 1,
          button: dogbtn,
          btntitle: "gatos",
          color: "#EEAD73",
        };

  const categories = [
    {
      id: 1,
      name: "Verão",
      image: name === "caes" ? dogverao : catverao,
      linkName: "verao",
    },
    {
      id: 2,
      name: "Inverno",
      image: name === "caes" ? doginverno : catinverno,
      linkName: "inverno",
    },
    {
      id: 3,
      name: "Diversos",
      image: name === "caes" ? dogdiversos : catdiversos,
      linkName: "diversos",
    },
    {
      id: 4,
      name: "Acessórios",
      image: name === "caes" ? dogacessorios : catacessorios,
      linkName: "acessorios",
    },
  ];

  useEffect(() => {
    api
      .get(`store/getAllByDep?limit=20&department=${load.id}&page=1`)
      .then((response) => {
        if (response.data.data.products.lenght === 0) {
          setError("404");
          setLoading(false);
          return;
        }
        setData(response.data.data.products);
        setLoading(false);
      })
      .catch(() => {
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
          <div className="deptocontainer">
            <div className="btnback">
              <div
                onClick={() =>
                  history.push(
                    `/departamento/${name === "caes" ? "gatos" : "caes"}`
                  )
                }
                className="btnform"
                style={{ color: load.color }}
              >
                <div>
                  <img src={load.button} alt="botao volta" />
                </div>
                <div>
                  <p>ㅤIr para ㅤ{load.btntitle}</p>
                </div>
              </div>
            </div>
            <img src={load.img} alt="imagem do departamento" />
          </div>
          <div className="lastproducts">
            <h1>Últimos produtos</h1>
            <Row xs={1} md={2} className="prods g-4">
              {data.slice(0, 3).map((prod, index) => (
                <Card key={index} prod={prod} />
              ))}
            </Row>
            <h3>Categorias</h3>

            <div className="categ  mt-4 pb-4 pt-2 g-4">
              {categories.map((cat, index) => (
                <CatCard
                  className="child"
                  key={index}
                  cat={cat}
                  department={name}
                />
              ))}
            </div>
          </div>
        </div>
      </Desktop>

      <Mobile>
        <div className="fixfooter">
          <div className="back" style={{ color: loadMobile.color }}>
            <div>
              <img src={loadMobile.button} alt="botao volta" />
            </div>
            <div>
              <a
                style={{ color: load.color }}
                href={`../departamento/${name === "caes" ? "gatos" : "caes"}`}
              >
                Ir para {load.btntitle}
              </a>
            </div>
          </div>
          <h1>Últimos produtos</h1>
          <div className="prods scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
            {data.slice(0, 6).map((prod, index) => (
              <Card key={index} prod={prod} />
            ))}
          </div>
          <div className="catys">
            <h1>Categorias</h1>
            {categories.map((category, index) => (
              <div className="caty">
                <img src={category.image} alt="imagem da categoria" />
                <a href={`/${name}/${category.linkName}`}>{category.name}</a>
              </div>
            ))}
          </div>
        </div>
      </Mobile>
      <Footer location={name} />
    </div>
  );
};

export default Department;
