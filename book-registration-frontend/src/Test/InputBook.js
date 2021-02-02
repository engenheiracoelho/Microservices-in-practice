import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class InputBook extends Component {
    render() {
        const title = <h2>{this.props.item.id ? 'New book' : 'Add book'}</h2>;
        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={this.props.item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <div className="row">
                        <FormGroup className="col-md-5 mb-3">
                            <Label for="price">Price</Label>
                            <Input type="double" name="price" id="price" value={this.props.item.price || ''}
                                   onChange={this.handleChange} autoComplete="price"/>
                        </FormGroup>
                        <FormGroup className="col-md-3 mb-3">
                            <Label for="available">Available</Label>
                            <Input type="boolean" name="available" id="available" value={this.props.item.available || ''}
                                   onChange={this.handleChange} autoComplete="available"/>
                        </FormGroup>
                    </div>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/book">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(InputBook);
