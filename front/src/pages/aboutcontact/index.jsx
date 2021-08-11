import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import about from "../../assets/about.png";
import contact from "../../assets/contact.png";

import "./styles.css";

const AboutContact = () => {
  const [form, setForm] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const schema = Yup.object({
    name: Yup.string().required("É necessário inserir um nome."),
    phone: Yup.number().required(
      "Telefone precisa ser no formado XX XXXXXXXX."
    ),
    email: Yup.string()
      .email()
      .required("E-mail precisa ser um e-mail válido."),
    msg: Yup.string().required("Necessário inserir uma mensagem."),
  });

  const handleSubmit = async (e) => {
    try {
      await schema.validate(form, { abortEarly: false });
      toast.success("Contato enviado com sucesso! 🐱🐶💕");
    } catch (error) {
      const errors = [];
      error.inner.map((e) => errors.push(e.message));
      errors.map((item) => toast.error(item));
    }
    e.preventDefault();
  };

  return (
    <div>
      <Nav />
      <div className="containerDesk">
        <div id="sobre" className="container just">
          <img
            className="imagemab"
            src={about}
            alt="imagem gato brincando com cachorro"
          />
          <div className="textcontainer">
            <p className="txttitle">Sobre nós</p>
            <p className="textab">
              Você já quis comprar uma roupa para o seu pet e não conseguiu
              encontrar o modelo ou o tamanho? Ou pior, você teve que ficar
              horas vasculhando pela procurando uma roupa que você gostasse e
              que servisse para seu pet?
              <br />
              <br />
              Nós, do 4Pets viemos para resolver esse problema! Centralizando
              roupas de pets em um lugar só você não precisa gastar tanto tempo
              na internet, basta vir em nosso site e pesquisar o que você
              precisa! <br />
              <br />
              Mais rápido do que um piscar de olhos!
            </p>
          </div>
        </div>
        <div id="contato" className="container just">
          <div className="textcontainer">
            <p className="txttitletalk">Fale conosco</p>
            <Form>
              <Form.Group controlId="form.Name">
                <Form.Control
                  className="flexWrapperOne formField my-3"
                  type="text"
                  onChange={(e) => setField("name", e.target.value)}
                  placeholder="Nome"
                />
              </Form.Group>
              <Form.Group controlId="form.Phone">
                <Form.Control
                  className="flexWrapperOne formField my-3"
                  type="number"
                  onChange={(e) => setField("phone", e.target.value)}
                  placeholder="Telefone"
                />
              </Form.Group>
              <Form.Group controlId="form.Email">
                <Form.Control
                  className="flexWrapperOne formField my-3"
                  type="Email"
                  onChange={(e) => setField("email", e.target.value)}
                  placeholder="E-mail"
                />
              </Form.Group>
              <Form.Group controlId="form.Msg">
                <Form.Control
                  className="flexWrapperOne formField "
                  as="textarea"
                  rows={5}
                  onChange={(e) => setField("msg", e.target.value)}
                  placeholder="Mensagem"
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  className="btnabout my-4 mx-5"
                >
                  Saiba mais
                </Button>
              </div>
            </Form>
          </div>
          <img
            className="imagemab"
            src={contact}
            alt="mulheres passeando com pets"
          />
        </div>
      </div>

      <div className="containerMobile">
        <div className="aboutMobile">
          <h3>Sobre Nós</h3>
          <p>
            Você já quis comprar uma roupa para o seu pet e não conseguiu
            encontrar o modelo ou o tamanho? Ou pior, você teve que ficar horas
            vasculhando pela procurando uma roupa que você gostasse e que
            servisse para seu pet?
            <br />
            <br /> Nós, do 4Pets viemos para resolver esse problema!
            Centralizando roupas de pets em um lugar só você não precisa gastar
            tanto tempo na internet, basta vir em nosso site e pesquisar o que
            você precisa! <br />
            <br />
            Mais rápido do que um piscar de olhos!
          </p>
          <h3>Fale conosco</h3>
          <Form>
            <Form.Group controlId="form.Name">
              <Form.Control
                className="flexWrapperOneCA formFieldCA my-3"
                type="text"
                onChange={(e) => setField("name", e.target.value)}
                placeholder="Nome"
              />
            </Form.Group>
            <Form.Group controlId="form.Phone">
              <Form.Control
                className="flexWrapperOneCA formFieldCA my-3"
                type="number"
                onChange={(e) => setField("phone", e.target.value)}
                placeholder="Telefone"
              />
            </Form.Group>
            <Form.Group controlId="form.Email">
              <Form.Control
                className="flexWrapperOneCA formFieldCA my-3"
                type="Email"
                onChange={(e) => setField("email", e.target.value)}
                placeholder="E-mail"
              />
            </Form.Group>
            <Form.Group controlId="form.Msg">
              <Form.Control
                className="flexWrapperOneCA formFieldCA "
                as="textarea"
                rows={5}
                onChange={(e) => setField("msg", e.target.value)}
                placeholder="Mensagem"
              />
            </Form.Group>
            <div className="fixfooter d-flex justify-content-end">
              <Button
                onClick={handleSubmit}
                type="submit"
                className="btnabout my-4 mx-5"
              >
                Saiba mais
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Footer location="contacts" />
    </div>
  );
};

export default AboutContact;
