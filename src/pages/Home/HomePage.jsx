import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllMessages} from "../../redux/actions/messageAction.js";
import {io} from "socket.io-client";
import MessageItem from "./MessageItem.jsx";
import AddMessage from "./AddMessage.jsx";
import AppSecret from "../../utils/appSecret.js";

const socket = io(AppSecret.SOCKET_BASE_API);

export default function HomePage() {
    const dispatch = useDispatch();

    const {messages} = useSelector((state) => state.message);

    const [isTyping, setIsTyping] = useState(false);

    // This useEffect will get all messages from backend
    useEffect(() => {
        // Dispatch the getAllMessages actions
        dispatch(getAllMessages());
    }, [dispatch]);

    // This useEffect is to connect to backend websocket (socket.io)
    useEffect(() => {
        // Connect to backend
        socket.on("connect", (data) => {
            console.log(data);
        });

        // It will listen the event name "message"
        socket.on("message", (message) => {
            console.log("aku dijalankan!", message);
            dispatch(getAllMessages());
        });

        socket.on("ontyping", () => {
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
            }, 1000);
        });

        socket.on("getAllMessages", () => {
            console.log("what happen?");
        });
    }, [dispatch]);

    return (
        <>
            <Container>
                <AddMessage socket={socket}/>
                <Row className="mt-4">
                    <Col>
                        <h6>{isTyping && "someone is typing a message..."}</h6>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col>
                        {messages?.length > 0 &&
                            messages?.map((message) => (
                                <MessageItem message={message} key={message.id}/>
                            ))}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
