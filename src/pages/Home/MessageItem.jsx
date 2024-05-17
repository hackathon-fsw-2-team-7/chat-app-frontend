import {Card} from "react-bootstrap";
import PropTypes from "prop-types";

export default function MessageItem({message}) {
    const messageDate = () => {
        const date = new Date(message.createdAt);
        return date.toUTCString();
    }

    return (
        <>
            <Card className={"mb-3"} body>
                <p>{message.createdBy}</p>
                <h4>{message.body}</h4>
                <p>{messageDate()}</p>
            </Card>
        </>
    );
}

MessageItem.propTypes = {
    message: PropTypes.object,
}