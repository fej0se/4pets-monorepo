import Responsive from "react-responsive";

import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";

import "./styles.css";

const ErrorNotFound = () => {
  const Desktop = (props) => <Responsive {...props} minWidth={1024} />;
  const Mobile = (props) => <Responsive {...props} maxWidth={1023} />;

  return (
    <div>
      <Nav />
      <Desktop>teste</Desktop>

      <Mobile>teste</Mobile>
      <Footer />
    </div>
  );
};

export default ErrorNotFound;
