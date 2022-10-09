import { Box, Stack } from "@mui/material";
import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";

function App() {
  /*const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });*/

  return (
    <Box>
      <Navbar />
      <Stack direction="row" alignContent="center">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
}

export default App;

//git log --graph --oneline --all

/*const [show, setShow] = useState(true);

  if (show) {
    return (
      <div className="App">
        <Alert
          variant="success"
          onClose={() => {
            setShow(false);
          }}
          dismissible
        >
          Hit the "X" to close this alert
        </Alert>

        <header className="App-header">
          <Container>
            <Form>
              <Row>
                <Col md>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="example@domain.com"
                    />
                    <Form.Text>
                      We'll never share your email address with anyone
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col md>
                  <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Please enter your password"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button variant="contained">Login</Button>
            </Form>

            <Card className="mb-3" style={{ color: "#000" }}>
              <Card.Img src="https://upload.wikimedia.org/wikipedia/en/e/e1/Milk_and_Mocha_characters.jpg" />
              <Card.Body>
                <Card.Title>Example card</Card.Title>
                <Card.Text>
                  This is an example of a card in React-Bootstrap
                </Card.Text>
                <Button variant="text">Read More</Button>
              </Card.Body>
            </Card>

            <Breadcrumb>
              <Breadcrumb.Item>Test</Breadcrumb.Item>
              <Breadcrumb.Item active>Test2</Breadcrumb.Item>
              <Breadcrumb.Item>Test3</Breadcrumb.Item>
            </Breadcrumb>
            <Button
              variant="contained"
              href="https://goo.gl/5LlCED"
              target="_blank"
            >
              Read More
            </Button>
          </Container>
        </header>
      </div>
    );
  }
  return (
    <div className="App">
      <div
        className="returnButton"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Button variant="contained" onClick={() => setShow(true)}>
          Show Alert
        </Button>
      </div>

      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="example@domain.com" />
                  <Form.Text>
                    We'll never share your email address with anyone
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Please enter your password"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="contained">Login</Button>
          </Form>

          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Img src="https://upload.wikimedia.org/wikipedia/en/e/e1/Milk_and_Mocha_characters.jpg" />
            <Card.Body>
              <Card.Title>Example card</Card.Title>
              <Card.Text>
                This is an example of a card in React-Bootstrap
              </Card.Text>
              <Button variant="text">Read More</Button>
            </Card.Body>
          </Card>

          <Breadcrumb>
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item active>Test2</Breadcrumb.Item>
            <Breadcrumb.Item>Test3</Breadcrumb.Item>
          </Breadcrumb>
          <Button
            variant="contained"
            href="https://goo.gl/5LlCED"
            target="_blank"
          >
            Read More
          </Button>
        </Container>
      </header>
    </div>
  );*/
