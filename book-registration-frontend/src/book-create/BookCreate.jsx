import { Component } from "react";

class BookCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleInputChange = this.handleInputChange.bind(this);

        this.createBook = this.createBook.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async createBook(event) {

        const book = {
            name: this.state.name,
            isAvailable: this.state.available | false,
            price: this.state.price
        }
       
        const bookAsJson = JSON.stringify(book);

        console.log(bookAsJson);

        await fetch('/book', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: bookAsJson,
        });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Crie seu livro estúpido!</h1>

                <form onSubmit={this.createBook}>
                    <label>
                        Nome:
                        <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInputChange} />
                    </label>

                    <label>
                        Preço do lixo:
                        <input
                            name="price"
                            type="number"
                            value={this.state.price}
                            onChange={this.handleInputChange} />
                    </label>

                    <label>
                        Disponível:
                        <input
                            name="available"
                            type="checkbox"
                            checked={this.state.available}
                            onChange={this.handleInputChange} />
                    </label>

                    <input type="submit" value="Enviar" />
                </form>
            </div>
        );
    }
}

export default BookCreate;