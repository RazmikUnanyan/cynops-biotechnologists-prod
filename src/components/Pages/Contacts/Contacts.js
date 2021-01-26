import React, {useState, useCallback} from "react";
import { Formik} from "formik";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const Contacts = ({setEmailForm}) => {
    const [open, setOpen] = useState(false);
    const handleClose = useCallback(() => {
        setOpen(false);
        setEmailForm(false)
    }, [setEmailForm]);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_4vgkmtp", "template_l8jncb9",
            e.target, "user_371J8LaP1QdAjP0BrzrVV"
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
        <>
            <Formik initialValues={initialValues} onSubmit={sendEmail}>
                {({values, target, handleChange}) => {
                    return (
                        <form onSubmit={sendEmail}>
                            <TextField name="name"
                                       label="Name"
                                       value={values.name}
                                       onChange={handleChange}
                                       fullWidth
                            />
                            <TextField name="email"
                                       label="Email Address"
                                       value={values.email}
                                       onChange={handleChange}
                                       fullWidth
                            />
                            <TextField name="subject"
                                       label="Тема"
                                       value={values.subject}
                                       onChange={handleChange}
                                       fullWidth
                            />
                            <TextField multiline
                                       style={{marginTop: "20px"}}
                                       fullWidth
                                       variant="outlined"
                                       name="message"
                                       label="Your message"
                                       value={values.message}
                                       onChange={handleChange}
                            />
                            <hr/>
                            <Button
                                style={{margin: '20px 0',  backgroundColor: '#f82249',color: "white"}}
                                variant="contained"
                                fullWidth
                                endIcon={<Icon>send</Icon>}
                                type="submit"
                            >
                            </Button>
                        </form>
                    )
                }}
            </Formik>
            {open && <Modal handleClose={handleClose} open={open}/>}
        </>)
};

export const Modal = ({handleClose, open}) => {
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
            <DialogActions style={{display: "flex", justifyContent: "center"}}>
                <Button onClick={handleClose} color="secondary" variant="contained">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Contacts;
