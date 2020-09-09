import React, {useState} from "react";
import {Button, Form, Col} from "react-bootstrap";
import {connect} from "react-redux";
import addToList, {editBook} from "../redux/action";

function BooksForm(props) {

    const [validated, setValidated] = useState(false);

    function getInfoFromForm(event) {
        event.preventDefault()
        let form = event.target

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setValidated(true);

            const bookInfo = {
                name: form.elements.formGridBookName.value,
                author: form.elements.formGridAuthor.value,
                year: form.elements.formGridYear.value,
                pages: form.elements.formGridPages.value,
                edit: false
            }

            if (props.books.filter(e => e.edit === true).length === 1) {
                props.editBook(bookInfo)
            } else {
                props.addToList(bookInfo)

            }

            form.elements.formGridBookName.value = ""
            form.elements.formGridAuthor.value = ""
            form.elements.formGridYear.value = ""
            form.elements.formGridPages.value = ""
        }
    }

    return (
        <div className="books-form">
            <Form noValidate validated={validated} onSubmit={getInfoFromForm}>
                <Form.Group controlId="formGridBookName">
                    <Form.Label>Название книги</Form.Label>
                    <Form.Control placeholder="Война и Мир" required/>
                </Form.Group>

                <Form.Group controlId="formGridAuthor">
                    <Form.Label>Автор</Form.Label>
                    <Form.Control placeholder="Лев Толстой" required/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridYear">
                        <Form.Label>Год издания</Form.Label>
                        <Form.Control type="number" placeholder="1867" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPages">
                        <Form.Label>Кол-во страниц</Form.Label>
                        <Form.Control type="number" placeholder="1255" required/>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Добавить книгу
                </Button>
            </Form>
        </div>
    )
}

const mapDispatchToProps = {
    addToList,
    editBook
}

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm)