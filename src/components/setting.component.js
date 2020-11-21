import React, { Component } from "react";
import {Container, Card, Button, CardDeck, Accordion, Form} from 'react-bootstrap';
import AccountDataService from "../services/account.service";

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
    this.updatePublished = this.updatePublished.bind(this);

    this.state = {
      currentTutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description
      }
    }));
  }

  getTutorial(id) {
    AccountDataService.get(id)
      .then(response => {
        this.setState({
          currentTutorial: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentTutorial.id,
      title: this.state.currentTutorial.title,
      description: this.state.currentTutorial.description,
      published: status
    };

    AccountDataService.update(this.state.currentTutorial.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <Container>
         <CardDeck>
             <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Img variant="top" src="box.png" />
                  <Card.Body>
                    <Card.Title>Box</Card.Title>
                    <Card.Text>
                      Enter credentials for box.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Enter Credentials!
                    </Accordion.Toggle>
                  </Card.Footer>
                   <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Form>
                        <Form.Group controlId="accountsid">
                          <Form.Label>Account Sid</Form.Label>
                          <Form.Control type="accountsid" placeholder="Enter Account Sid" />
                          <Form.Text className="text-muted">
                            We'll save crdentials in secret bucket.
                          </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="authcredential">
                          <Form.Label>Auth Credential</Form.Label>
                          <Form.Control type="auth" placeholder="Enter Auth Credentials" />
                          <Form.Text className="text-muted">
                            We'll save crdentials in secret bucket.
                          </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
                    </Card.Body>
                  </Accordion.Collapse>
                 </Card>
             </Accordion>
             <Accordion defaultActiveKey="0">
              <Card>
                <Card.Img variant="top" src="dropbox.png" />
                <Card.Body>
                  <Card.Title>Dropbox</Card.Title>
                  <Card.Text>
                    Enter credentials for DropBox.
                  </Card.Text>
                </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Enter Credentials!
                    </Accordion.Toggle>
                    </Card.Footer>
                     <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group controlId="accountsid">
                            <Form.Label>Account Sid</Form.Label>
                            <Form.Control type="accountsid" placeholder="Enter Account Sid" />
                            <Form.Text className="text-muted">
                              We'll save crdentials in secret bucket.
                            </Form.Text>
                          </Form.Group>
                          <Form.Group controlId="authcredential">
                            <Form.Label>Auth Credential</Form.Label>
                            <Form.Control type="auth" placeholder="Enter Auth Credentials" />
                            <Form.Text className="text-muted">
                              We'll save crdentials in secret bucket.
                            </Form.Text>
                          </Form.Group>
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                      </Card.Body>
                  </Accordion.Collapse>
              </Card>
              </Accordion>
              <Accordion defaultActiveKey="0">
              <Card>
                <Card.Img variant="top" src="google-drive.png" />
                <Card.Body>
                  <Card.Title>Google Drive</Card.Title>
                  <Card.Text>
                    Google Drive Credentials here.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Enter Credentials!
                    </Accordion.Toggle>
                    </Card.Footer>
                     <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group controlId="accountsid">
                            <Form.Label>Account Sid</Form.Label>
                            <Form.Control type="accountsid" placeholder="Enter Account Sid" />
                            <Form.Text className="text-muted">
                              We'll save crdentials in secret bucket.
                            </Form.Text>
                          </Form.Group>
                          <Form.Group controlId="authcredential">
                            <Form.Label>Auth Credential</Form.Label>
                            <Form.Control type="auth" placeholder="Enter Auth Credentials" />
                            <Form.Text className="text-muted">
                              We'll save crdentials in secret bucket.
                            </Form.Text>
                          </Form.Group>
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                      </Card.Body>
                  </Accordion.Collapse>
              </Card>
              </Accordion>
              <Accordion defaultActiveKey="0">
              <Card>
                <Card.Img variant="top" src="zendesk.png" />
                <Card.Body>
                  <Card.Title>Zendesk</Card.Title>
                  <Card.Text>
                    Zendesk Credentials here.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Enter Credentials!
                    </Accordion.Toggle>
                    </Card.Footer>
                     <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group controlId="accountsid">
                            <Form.Label>Account Sid</Form.Label>
                            <Form.Control type="accountsid" placeholder="Enter Account Sid" />
                            <Form.Text className="text-muted">
                              We'll save crdentials in secret bucket.
                            </Form.Text>
                          </Form.Group>
                          <Form.Group controlId="authcredential">
                            <Form.Label>Auth Credential</Form.Label>
                            <Form.Control type="auth" placeholder="Enter Auth Credentials" />
                            <Form.Text className="text-muted">
                              We'll save crdentials in secret bucket.
                            </Form.Text>
                          </Form.Group>
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                      </Card.Body>
                  </Accordion.Collapse>
              </Card>
              </Accordion>
              <Accordion defaultActiveKey="0">
              <Card>
                <Card.Img variant="top" src="asana.png" />
                <Card.Body>
                  <Card.Title>Asana</Card.Title>
                  <Card.Text>
                    Asana Credentials here.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Enter Credentials!
                    </Accordion.Toggle>
                    </Card.Footer>
                     <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group controlId="accountsid">
                            <Form.Label>Account Sid</Form.Label>
                            <Form.Control type="accountsid" placeholder="Enter Account Sid" />
                            <Form.Text className="text-muted">
                              We'll save crdentials in secret bucket.
                            </Form.Text>
                          </Form.Group>
                          <Form.Group controlId="authcredential">
                            <Form.Label>Auth Credential</Form.Label>
                            <Form.Control type="auth" placeholder="Enter Auth Credentials" />
                            <Form.Text className="text-muted">
                              We'll save crdentials in secret bucket.
                            </Form.Text>
                          </Form.Group>
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                      </Card.Body>
                  </Accordion.Collapse>
              </Card>
              </Accordion>
              <Accordion defaultActiveKey="0">
              <Card>
                <Card.Img variant="top" src="onenote.png" />
                <Card.Body>
                  <Card.Title>One Note</Card.Title>
                  <Card.Text>
                    One Note Credentials here.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Enter Credentials!
                    </Accordion.Toggle>
                    </Card.Footer>
                     <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Form>
                          <Form.Group controlId="accountsid">
                            <Form.Label>Account Sid</Form.Label>
                            <Form.Control type="accountsid" placeholder="Enter Account Sid" />
                            <Form.Text className="text-muted">
                              We'll save crdentials in secret bucket.
                            </Form.Text>
                          </Form.Group>
                          <Form.Group controlId="authcredential">
                            <Form.Label>Auth Credential</Form.Label>
                            <Form.Control type="auth" placeholder="Enter Auth Credentials" />
                            <Form.Text className="text-muted">
                              We'll save crdentials in secret bucket.
                            </Form.Text>
                          </Form.Group>
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                      </Card.Body>
                  </Accordion.Collapse>
              </Card>
              </Accordion>
        </CardDeck>
        </Container>
      </div>
    );
  }
}
