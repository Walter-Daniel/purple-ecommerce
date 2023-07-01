import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

type ThemeProp = {
    children: JSX.Element
};

enum themePalette {
    BG = "#011627"
}

const theme = createTheme({
    palette:{
        mode:"dark",
        background:{
            default: themePalette.BG,
        },
        primary: {
            main: "#2ec4b6"
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: "capitalize",
                    borderRadius: "0.5em"
                }
            }
        }
    }
})

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return (   
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )       
}