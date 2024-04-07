import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <Form>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col xs={6}>
            <Stack gap={"2"}>
              <h2>Register</h2>
              <Form.Control type="text" placeholder="Enter your name" />
              <Form.Control type="email" placeholder="Enter your email" />
              <Form.Control type="password" placeholder="Enter your password" />
              <Button variant="primary" type="submit">
                Register
              </Button>

              <Alert variant="danger">
                <p>An error occurred </p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
