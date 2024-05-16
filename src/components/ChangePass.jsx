import { Card, Image, Form, InputGroup, Button } from "react-bootstrap";

const Profile = () => {
    return (
        <>
            <style type="text/css">
                {`
                    .custom-label {
                        width: 130px;
                    }
                    .cancel {
                        width: 30px;
                        height: 30px;
                        padding: 0;
                        text-align: center;
                    }
                `}
            </style>

            <Card className="shadow bg-secondary text-light">
                <Card.Header className="d-flex justify-content-end">
                    {/* Add routing to home */}
                    <Button variant="outline-light" className="cancel">
                        X
                    </Button>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Card.Title className="text-center fs-2 mb-3">
                            CHANGE PASSWORD
                        </Card.Title>
                        <InputGroup className="mb-3 mt-5">
                            <InputGroup.Text
                                id="password-addon"
                                className="custom-label"
                            >
                                New Password
                            </InputGroup.Text>
                            <Form.Control
                                type="password"
                                aria-label="password"
                                aria-describedby="password-addon"
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                id="confirm-password-addon"
                                className="custom-label"
                            >
                                Confirm
                            </InputGroup.Text>
                            <Form.Control
                                type="password"
                                aria-label="confirm-password"
                                aria-describedby="confirm-password-addon"
                            />
                        </InputGroup>
                    </Form>

                    <div className="d-grid gap-2 mt-5">
                        <Button
                            variant="success"
                            className="w-100 rounded-pill"
                        >
                            Save Changes
                        </Button>
                        <Button
                            variant="warning"
                            className="w-100 rounded-pill"
                        >
                            Cancel
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default Profile;
