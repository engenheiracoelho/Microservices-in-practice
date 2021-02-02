import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {book: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/book')
            .then(response => response.json())
            .then(data => this.setState({book: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/book/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedBook = [...this.state.book].filter(i => i.id !== id);
            this.setState({book: updatedBook});
        });
    }

    render() {
        const {book, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const bookList = book.map(book => {
            const name = `${book.name || ''} ${book.price || ''}`;
            return <tr key={book.id}>
                <td style={{whiteSpace: 'nowrap'}}>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.available}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/book/" + book.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(book.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/book/new">Add Book</Button>
                    </div>
                    <h3>My JUG Tour</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Name</th>
                            <th>Events</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bookList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default BookList;
