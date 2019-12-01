import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";



function Saved(props) {
  console.log("This is: " + props.books);
  return (
    <div>
      <h1>Saved</h1>
      <Col size="md-6 sm-12">
            {props.books.length ? (
              <List>
                {props.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
    </div>
  );
}

export default Saved;
