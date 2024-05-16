import { Card, Image, Form, InputGroup, Button } from "react-bootstrap";

const Profile = () => {
    return (
        <>
            <style type="text/css">
                {`
                    .custom-label {
                        width: 95px;
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
                            EDIT PROFILE
                        </Card.Title>
                        <InputGroup className="mb-3 mt-5">
                            <InputGroup.Text
                                id="nama-addon"
                                className="custom-label"
                            >
                                Username
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="nama"
                                aria-describedby="nama-addon"
                                placeholder="linusTechTips" // currrent username
                            />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                id="nama-addon"
                                className="custom-label"
                            >
                                Name
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="nama"
                                aria-describedby="nama-addon"
                                placeholder="Linus Sebastian" // current name
                            />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <InputGroup.Text
                                id="mail-addon"
                                className="custom-label"
                            >
                                Email
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="mail"
                                aria-describedby="mail-addon"
                                placeholder="linussebaastian@binar.com" // current email
                            />
                        </InputGroup>
                        <Form.Group className="mb-3">
                            <Form.Label className="ms-1">
                                Change Profile Picture
                            </Form.Label>
                            <Form.Control type="file" accept="image/*" />
                        </Form.Group>
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
