import React, { Component } from 'react'

class BookList extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        this.updateBookList();
    }

    updateBookList() {
        fetch('/book')
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    render() {
        return (
            <div>
                <h1>Issu eh listajen di livrinhu</h1>

                <ul>
                    {this.state.data.map(book => (
                        <li key={book.id}>
                            {book.name}. Custa apenas R$ {book.price}.
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};


export default BookList;