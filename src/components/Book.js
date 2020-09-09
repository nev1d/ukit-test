import React from "react";
import {Button, Card} from "react-bootstrap";
import {connect} from "react-redux";
import {editInfo, removeFromList} from "../redux/action";

function Book(props) {

    function removeBook() {
        const infoForRemove = {
            name: props.book.name,
            author: props.book.author
        }
        props.removeFromList(infoForRemove)
    }

    function editBook() {
        const infoForEdit = {
            name: props.book.name,
            author: props.book.author
        }
        props.editInfo(infoForEdit)
        let form = document.querySelector(".books-form").firstChild
        form.elements.formGridBookName.value = props.book.name
        form.elements.formGridAuthor.value = props.book.author
        form.elements.formGridYear.value = props.book.year
        form.elements.formGridPages.value = props.book.pages
    }

    return (
        <div className="book">
            <Card>
                <Card.Body>
                    <Card.Title>{props.book.name}</Card.Title>
                    <Card.Text>
                        Автор книги {props.book.author}
                    </Card.Text>
                    <Button variant="primary" onClick={removeBook}>Удалить</Button>
                    <Button variant="secondary" onClick={editBook}>Редактировать</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

const MapDispatchToProps = {
    removeFromList,
    editInfo,
}

export default connect(null, MapDispatchToProps)(Book)