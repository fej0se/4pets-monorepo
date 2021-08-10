import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Row } from "react-bootstrap";
import Responsive from "react-responsive";
import api from "../../services/api";

import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Card } from "../../components/Card";
import { PageError } from "../../components/PageError";

import "./styles.css";

const Search = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("search");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const Desktop = (props) => <Responsive {...props} minWidth={1024} />;
  const Mobile = (props) => <Responsive {...props} maxWidth={1023} />;

  useEffect(() => {
    api
      .get(`/store/search?name=${search}&page=1`)
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
          <div className="searchpage">
            <h3>Buscando por:</h3>
            <h3>{search}</h3>
          </div>
          <Row xs={1} md={2} className="prods g-4">
            {data.map((prod, index) => (
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
            {data.map((prod, index) => (
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
