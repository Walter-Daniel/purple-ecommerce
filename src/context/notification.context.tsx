import { FC, createContext, useState, useContext } from "react";
import { NotificationComp } from "../components";
import { AlertColor } from '@mui/material';


type ContextProps = {
    getError : (msg:string) => void;
    getSuccess: (msg:string) => void;
};

const NotificationContext= createContext<ContextProps | null>(null);

export const NotificationProvider: FC<{ children : JSX.Element }> = ({ children }) => {

    const handleClose = () => {
        setOpen(false);
    }

    const [msg, setMsg] = useState("");
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState<AlertColor | undefined >(undefined)

    const getError = (msg:string) => {
        setSeverity("error")
        setOpen(true)
        setMsg(msg)
    };
    const getSuccess = (msg:string) => {
        setSeverity("success")
        setOpen(true)
        setMsg(msg)
    };
    const value = {
        getError,
        getSuccess
    };

    return(
        <NotificationContext.Provider  value={value}>
            <NotificationComp handleClose={handleClose} open={open} severity={severity} msg={msg} />
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if(!context) throw new Error('No existe Contexto')
    return context
}