import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const Modal = ({ title, onClose, visible = false, children }) => {
    if (!visible) {
        return null;
    }

    return (
        <Dialog
            open={visible}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title" className="modal_header"  fullWidth data-aos="fade-down">
                <IconButton onClick={onClose} color="secondary" aria-label="close">
                    <CloseIcon style={{ fontSize: 26 }} color="action" />
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent className="modal_content">
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default Modal;
