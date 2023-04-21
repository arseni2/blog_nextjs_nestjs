import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText} from "@mui/material";

type propsType = {
    open: boolean
    handleClose: () => void
}
const LogoutModalWindow = (props: propsType) => {
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Logout from account
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Ok</Button>
                <Button onClick={props.handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default LogoutModalWindow;