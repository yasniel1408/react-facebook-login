import logo from "./logo.svg";
import "./App.css";
import FacebookLogin from "react-facebook-login";
import { Card, Image } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <div className="App">
      <Card style={{ width: "600px" }}>
        <Card.Header>
          {!login && (
            <FacebookLogin
              appId="940450353404968"
              // autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook"
            />
          )}
          {login && <Image src={picture} roundedCircle width={100}/>}
        </Card.Header>
        {login && (
          <Card.Body>
            <Card.Title style={{fontSize: 50}}>{data.name}</Card.Title>
            <Card.Text>{data.email}</Card.Text>
          </Card.Body>
        )}
      </Card>
    </div>
  );
}

export default App;
