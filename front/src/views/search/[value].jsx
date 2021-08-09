import { useLocation } from "react-router-dom";
import { Row } from "react-bootstrap";
import Responsive from "react-responsive";

import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Card } from "../../components/Card";

import "./styles.css";

const Search = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("search");
  const teste = [
    {
      id: 566,
      name: "Roupinha Inverno",
      image: "https://i.ibb.co/BsWYTPL/Nomads-Dog.png",
      category: "Inverno - Dog",
      description:
        "Roupinha linda para o seu dog não passar frio nesse inverno",
    },
  ];

  const Desktop = (props) => <Responsive {...props} minWidth={1024} />;
  const Mobile = (props) => <Responsive {...props} maxWidth={1023} />;
  return (
    <div>
      <Nav />

      <Desktop>
        <div>
          <div className="searchpage">
            <h3>Buscando por:</h3>
            <h3>{search}</h3>
          </div>
          <Row xs={1} md={2} className="prods g-4">
            {teste.map((prod, index) => (
              <Card key={index} prod={prod} />
            ))}
          </Row>
        </div>
      </Desktop>

      <Mobile>
        <div className="fixfooter">
          <div className="searchpage">
            <h3>Buscando por:</h3>
            <h3>{search}</h3>
          </div>
          <div className="prods scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
            {teste.map((prod, index) => (
              <Card key={index} prod={prod} />
            ))}
          </div>
        </div>
      </Mobile>

      <Footer />
    </div>
  );
};

export default Search;
