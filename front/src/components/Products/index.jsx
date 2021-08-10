import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Responsive from "react-responsive";
import api from "../../services/api";

import { Card } from "../Card";
import { PageError } from "../PageError";

import "./products.css";

export function Products() {
  const [data, setData] = useState("");
  const [error, setError] = useState(false);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    api
      .get(`store/products?page=1`)
      .then((response) => response.data.data)
      .then((page) =>
        api
          .get(`store/products?page=${getRandomIntInclusive(1, page)}`)
          .then((response) => {
            if (response.data.data.products.lenght === 0) {
              setError("404");
              setLoading(false);
              return;
            }
            setData(response.data.data.products);
            setLoading(false);
          })
      )
      .catch(() => {
        setError("500");
        setLoading(false);
        return;
      });
  }, []);

  const Desktop = (props) => <Responsive {...props} minWidth={1024} />;
  const Mobile = (props) => <Responsive {...props} maxWidth={1023} />;
  const [isLoading, setLoading] = useState(true);

  if (isLoading) {
    return <div className="App">Carregando...</div>;
  }

  if (error) {
    return <PageError error={error} />;
  }

  return (
    <div>
      <h3>Destaques da semana.</h3>{" "}
      <Desktop>
        <section className="py-5">
          <Container fluid={true} className=" px-5 my-5">
            <div className=" row gx-5 justify-content-center">
              <Row xs={1} md={2} className="prods g-4">
                {data.map((prod, index) => (
                  <Card key={index} prod={prod} />
                ))}
              </Row>
            </div>
          </Container>
        </section>
      </Desktop>
      <Mobile>
        <div className="prods scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
          {data.map((prod, index) => (
            <Card key={index} prod={prod} />
          ))}
        </div>
      </Mobile>
    </div>
  );
}
