import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText, Card} from 'reactstrap';
import "./search.css";

const Search = (props) => {
    return (
        <Container id="backDiv">
            <Card id="searchTxt">    
                <h2 className="text-center">
                    Welcome to Skill-Trade!
                </h2>
                <Form>
                    <FormGroup>
                        {/* <Label for="search" id="label">Search</Label> */}
                        <Input type="text" name="search" id="search" placeholder="Search Listings" large className = "text-center"/>
                    </FormGroup>
                    <Button id="btn">Submit</Button>
                </Form>
            </Card>
        </Container>
    );
};

export default Search;