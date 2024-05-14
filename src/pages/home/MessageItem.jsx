import {Card} from "react-bootstrap";
import PropTypes from "prop-types";

export default function MessageItem({message}) {
    return (
        <>
            <Card body>{message.body}</Card>
        </>
    );
}

MessageItem.propTypes = {
    message: PropTypes.object,
}