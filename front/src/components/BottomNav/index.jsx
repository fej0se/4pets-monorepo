import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCat,
  faDog,
  faHome,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  root: {},
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: "0%",
    background: "rgba(168, 206, 218, 1)",
  },
});

export default function BottomNavi() {
  const classes = useStyles();
  const [value, setValue] = React.useState("home");
  const history = useHistory();

  const goto = (value) => {
    switch (value) {
      case "dogs":
        history.push("../departamento/caes");
        break;
      case "cats":
        history.push("../departamento/gatos");
        break;
      case "contacts":
        history.push("../contato-sobre");
        break;
      default:
        history.push("../");
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    goto(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.stickToBottom}
    >
      <BottomNavigationAction
        label="Inicio"
        value="home"
        icon={<FontAwesomeIcon icon={faHome} size="lg" />}
      />
      <BottomNavigationAction
        label="Cães"
        value="dogs"
        icon={<FontAwesomeIcon icon={faDog} size="lg" />}
      />
      <BottomNavigationAction
        label="Gatos"
        value="cats"
        icon={<FontAwesomeIcon icon={faCat} size="lg" />}
      />
      <BottomNavigationAction
        label="Contato"
        value="contacts"
        icon={<FontAwesomeIcon icon={faInfo} size="lg" />}
      />
    </BottomNavigation>
  );
}
