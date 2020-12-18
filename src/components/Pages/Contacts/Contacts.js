import React, { useState, useCallback } from "react";
import { Form, Formik } from "formik";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";
import FormField from "../../common/FormField";
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import { Col, Container, Row, Tab } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const Contacts = () => {
    const classes = useStyles();

    // modal
    const [open, setOpen] = useState(false);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    //

    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_4vgkmtp",
                "template_l8jncb9",
                e.target,
                "user_371J8LaP1QdAjP0BrzrVV"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        setOpen(true);
    }

    return (
        <Container>
            <Tab.Container id="ledt-tabs-example">
                <Row>
                    <Col sm={10}>
                        <>
                            <Formik initialValues={initialValues}>
                                {(formik) => {
                                    return (
                                        <Form className="FormikField">
                                            <form onSubmit={sendEmail}>
                                                <FormField name="name" label="Name" />
                                                <FormField name="email" label="Email Address" />
                                                <FormField name="subject" label="Subject" />
                                                <TextField
                                                    multiline
                                                    style={{ marginTop: "20px" }}
                                                    fullWidth
                                                    variant="outlined"
                                                    name="message"
                                                    label="Your message"
                                                />
                                                <hr />
                                                <Button
                                                    disabled={!formik.dirty}
                                                    variant="contained"
                                                    color="secondary"
                                                    className={classes.button}
                                                    size="small"
                                                    endIcon={<Icon>send</Icon>}
                                                    type="submit"
                                                >
                                                    Send
                                                </Button>
                                            </form>
                                        </Form>
                                    );
                                }}
                            </Formik>
                            {open && <Modal handleClose={handleClose} open={open} />}
                        </>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export const Modal = ({ handleClose, open }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogContent>
                <p className="font-weight-bold text-secondary">
                    Ваше письмо успешно отправлено!
                </p>
            </DialogContent>
            <DialogActions style={{ display: "flex", justifyContent: "center" }}>
                <Button onClick={handleClose} color="secondary" variant="contained">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Contacts;
