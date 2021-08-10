import Responsive from "react-responsive";
import bannerdesk from "../../assets/banner.png";
import "./banner.css";

export function Banner() {
  const Desktop = (props) => <Responsive {...props} minWidth={1024} />;
  const Mobile = (props) => <Responsive {...props} maxWidth={1023} />;

  return (
    <div className="banner">
      <Desktop>
        <img src={bannerdesk} alt="banner da loja" />
      </Desktop>
      <Mobile>
        <img src={bannerdesk} alt="banner da loja" />
      </Mobile>
    </div>
  );
}
