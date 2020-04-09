import React, {useState, useEffect} from 'react'
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import fire from '../config/firebase';
import './Login.scss'

export default () => {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [out, setOut] = useState(null)

  const logout = () => {
      fire
        .auth()
        .signOut()
  }

  const login = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("-------------->", { user });
      })
      .catch((error) => console.log("-----------login error", { error }));
  };

  const sighIn = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("-------------->", { user });
      })
      .catch((error) => console.log("-----------login error", { error }));
  };

  useEffect(() => {
    if (!out) {
      logout();
      setOut(true)
    }
  }, [out, setOut, logout]);

  return (
    <div className="login-form">
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary">
              <h4>Logout</h4>
              <p>Thanks, come back soon</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (e) => setEmail(e.target.value),
                      defaultValue: email,
                    }}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <CustomInput
                    type="password"
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (e) => setPassword(e.target.value),
                      defaultValue: password,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={() => login()}>
                Login
              </Button>
              <Button color="secondary" onClick={() => sighIn()}>
                Sign In
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}