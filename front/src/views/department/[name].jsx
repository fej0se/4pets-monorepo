import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import Responsive from "react-responsive";
import api from "../../services/api";

import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Card } from "../../components/Card";
import { CatCard } from "../../components/CatCard";

import cat from "../../assets/bannercat.png";
import dog from "../../assets/bannerdog.png";
import catbtn from "../../assets/catbtn.png";
import dogbtn from "../../assets/dogbtn.png";
import "./styles.css";
//...

const Department = () => {
  const { name } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState("");

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
        }
      : {
          id: 2,
          img: cat,
          button: dogbtn,
          btntitle: "cachorros",
          rollbacklink: 1,
          color: "#EEAD73",
        };

  const loadMobile =
    name === "caes"
      ? {
          id: 1,
          img: dog,
          rollbacklink: 2,
          button: dogbtn,
          btntitle: "cachorros",
          color: "#EEAD73",
        }
      : {
          id: 2,
          img: cat,
          rollbacklink: 1,
          button: catbtn,
          btntitle: "gatos",
          color: "#92c2ac",
        };

  const categories = [
    {
      id: 1,
      name: "Verão",
      image: "https://i.ibb.co/BsWYTPL/Nomads-Dog.png",
      linkName: "verao",
    },
    {
      id: 2,
      name: "Inverno",
      image: "https://i.ibb.co/BsWYTPL/Nomads-Dog.png",
      linkName: "inverno",
    },
    {
      id: 3,
      name: "Diversos",
      image: "https://i.ibb.co/BsWYTPL/Nomads-Dog.png",
      linkName: "diversos",
    },
    {
      id: 4,
      name: "Acessórios",
      image: "https://i.ibb.co/BsWYTPL/Nomads-Dog.png",
      linkName: "acessorios",
    },
  ];

  useEffect(() => {
    api
      .get(`store/getAllByDep?limit=3&department=${load.id}&page=1`)
      .then((response) => {
        setData(response.data.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      <Nav />
      <Desktop>
        <div>
          <div className="deptocontainer">
            <div className="btnback">
              <div className="btnform" style={{ color: load.color }}>
                <div>
                  <img src={load.button} alt="" />
                </div>
                <div>
                  <p>Ir para {load.btntitle}</p>
                </div>
              </div>
            </div>
            <img src={load.img} alt="" />
          </div>
          <div className="lastproducts">
            <h1>Últimos produtos</h1>
            <Row xs={1} md={2} className="prods g-4">
              {data.map((prod, index) => (
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
              <img src={loadMobile.button} alt="" />
            </div>
            <div>
              <p>{loadMobile.btntitle}</p>
            </div>
          </div>
          <h1>Últimos produtos</h1>
          <div className="prods scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
            {data.map((prod, index) => (
              <Card key={index} prod={prod} />
            ))}
          </div>
          <div className="catys">
            <h1>Categorias</h1>
            {categories.map((category, index) => (
              <div className="caty">
                <img src={category.image} alt="" />
                <a href={`/${name}/${category.linkName}`}>{category.name}</a>
              </div>
            ))}
          </div>
        </div>
      </Mobile>
      <Footer />
    </div>
  );
};

export default Department;
