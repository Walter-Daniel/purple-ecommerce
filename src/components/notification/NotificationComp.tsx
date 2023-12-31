import React from 'react';
import { Snackbar, Alert, AlertColor, Typography } from '@mui/material';

type NotificationProps = {
    open:  boolean,
    msg: string,
    severity: AlertColor | undefined,
    handleClose: () => void
}

export const NotificationComp: React.FC<NotificationProps> = ({ open, msg, severity, handleClose }) => {
  return (
    <Snackbar 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
        autoHideDuration={5000}
        open={open}
        onClose={handleClose}
        >
        <Alert onClose={handleClose} severity={severity}>
            <Typography>{msg}</Typography>
        </Alert>
    </Snackbar>
  )
}