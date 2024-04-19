import * as React from 'react';
import {
    Dialog, DialogTitle, DialogContent, IconButton, DialogContentText, Avatar,
    Card
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';


export type Props = {
    first: string;
    last: string;
    gender: string;
    email: string;
    phone: string;
}

const ModalWrapper = (Props: any, openPopup: any) => {

    return (
        <Dialog open={openPopup}>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                User Details
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={openPopup}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}>
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <Avatar src={Props.picture.medium}></Avatar>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    <DialogContentText>
                        <span style={{ paddingRight: '2rem' }}>
                            {`Name  : `} </span>
                    </DialogContentText>
                    <DialogContentText>
                        {"    " + Props.name.first + " " + Props.name.last}
                    </DialogContentText>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    <DialogContentText>
                        <span style={{ paddingRight: '0.2rem' }}>
                            {`Gender  : `} </span>
                    </DialogContentText>
                    <DialogContentText style={{ paddingLeft: '1rem' }}>
                        {Props.gender}
                    </DialogContentText>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    <DialogContentText>
                        <span style={{ paddingRight: '2rem' }}>
                            {`Email:  `}</span>
                    </DialogContentText>
                    <DialogContentText>
                        {"    " + Props.email}
                    </DialogContentText>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    <DialogContentText>
                        <span style={{ paddingRight: '1.5rem' }}>
                            {`Ph No: `} </span>
                    </DialogContentText>
                    <DialogContentText>
                        {"    " + Props.phone}
                    </DialogContentText>
                </div>
            </DialogContent>
        </Dialog>
    );
}


export default ModalWrapper;
