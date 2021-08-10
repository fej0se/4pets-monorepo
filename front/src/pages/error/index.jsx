import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { PageError } from "../../components/PageError";

import "./styles.css";

const ErrorNotFound = () => {
  return (
    <div>
      <Nav />
      <PageError error="500" />
      <Footer />
    </div>
  );
};

export default ErrorNotFound;
