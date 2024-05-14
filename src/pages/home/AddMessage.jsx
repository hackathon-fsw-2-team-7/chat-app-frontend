import PropTypes from "prop-types";
import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addMessage} from "../../redux/actions/messageAction.js";

export default function AddMessage({socket}) {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(addMessage(message)).then((_) => {
            setMessage("");
        });
    }

    return (
        <>
            <Form onSubmit={onSubmitHandler}>
                <Row className="g-2 mt-4">
                    <Col md>
                        <FloatingLabel
                            controlId="floatingInputGrid"
                            label="Add Message"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Add message"
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    socket.emit("typing");
                                }}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <div className="d-grid gap-2">
                            <Button variant="primary" type="submit" size="lg">
                                Add Message
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

AddMessage.propTypes = {
    socket: PropTypes.object
}