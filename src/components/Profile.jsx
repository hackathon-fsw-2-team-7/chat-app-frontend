import { Card, Image, Form, InputGroup, Button } from "react-bootstrap";

const Profile = () => {
    return (
        <>
            <style type="text/css">
                {`
                    .img-profile {
                        object-fit: cover;
                        height: 200px;
                        width: 200px;
                        border: 3px solid white;
                    }
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
                            YOUR PROFILE
                        </Card.Title>
                        <div className="d-flex flex-column align-items-center mb-4">
                            {/* Check if photo exists, if not use default photo */}
                            <Image
                                src="images/profileTemp.jpg"
                                className="img-profile"
                                roundedCircle
                            />
                        </div>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                id="nama-addon"
                                className="custom-label"
                            >
                                Username
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="nama"
                                aria-describedby="nama-addon"
                                value="linusTechTips" // replace with real data
                                disabled
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
                                value="Linus Sebastian" // replace with real data
                                disabled
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                id="mail-addon"
                                className="custom-label"
                            >
                                Email
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="mail"
                                aria-describedby="mail-addon"
                                value="linussebaastian@binar.com" // replace with real data
                                disabled
                            />
                        </InputGroup>
                    </Form>

                    <div className="d-grid gap-2 mt-5">
                        <Button
                            variant="primary"
                            className="w-100 rounded-pill"
                        >
                            Edit Profile
                        </Button>
                        <Button
                            variant="warning"
                            className="w-100 rounded-pill"
                        >
                            Change Password
                        </Button>
                        <Button variant="danger" className="w-100 rounded-pill">
                            Delete Profile
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default Profile;
