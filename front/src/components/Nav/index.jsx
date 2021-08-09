import { Form, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Responsive from "react-responsive";

import home from "../../assets/home.png";
import logo from "../../assets/logo.png";
import "./nav.css";

export function Nav(props) {
  const Desktop = (props) => <Responsive {...props} minWidth={1024} />;
  const Mobile = (props) => <Responsive {...props} maxWidth={1023} />;
  let search;
  const history = useHistory();
  const doSearch = (e) => {
    if (e.key === "Enter") {
      search = e.target.value;
      history.push(`/produtos?search=${search}`);
      e.preventDefault();
    }
  };
  return (
    <div>
      <Desktop>
        <nav className="navbar navbar-expand-md navbar-dark NvBackground justify-content-around">
          <a className="navbar-brand" href={"../"}>
            <img src={logo} alt="logo" />
          </a>
          <div>
            <Form>
              <FormControl
                className="flexWrapperOneNav formFieldNav"
                type="text"
                placeholder="Buscar produto"
                aria-label="Search"
                value={search}
                onKeyDown={doSearch}
              />
            </Form>
          </div>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/contato-sobre#contato">
                  Contato
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contato-sobre#sobre">
                  Sobre
                </a>
              </li>
            </ul>
          </div>
          <div className="social">
            <a href="../">
              <img alt="" className="ellipse7" src={home} />
            </a>
            <a href="http://facebook.com">
              <img
                alt=""
                className="ellipse7"
                src="https://static.overlay-tech.com/assets/0a6c99e4-ab70-4288-93aa-3fe6d1a6b1d2.png"
              />
            </a>
            <a href="http://instagram.com">
              <img
                alt=""
                className="ellipse7"
                src="https://static.overlay-tech.com/assets/2d46c838-964b-4deb-a44d-d84baa3a5fec.png"
              />
            </a>
          </div>
        </nav>
      </Desktop>
      <Mobile>
        <nav className="navbar navbar-expand-md navbar-dark NvMobile justify-content-around">
          <a className="navbar-brand" href={"../"}>
            <img src={logo} alt="logo" />
          </a>
          <div>
            <Form>
              <FormControl
                className="flexWrapperOneMobile formFieldMobile"
                type="text"
                placeholder="Buscar produto"
                aria-label="Search"
                value={search}
                onKeyDown={doSearch}
              />
            </Form>
          </div>
        </nav>
      </Mobile>
    </div>
  );
}
