import {Card} from "react-bootstrap";
import PropTypes from "prop-types";

export default function MessageItem({message}) {
    return (
        <>
            <Card className={"mb-3"} body>
                <p>{message.createdBy}</p>
                <h4>{message.body}</h4>
            </Card>
        </>
    );
}

MessageItem.propTypes = {
    message: PropTypes.object,
}