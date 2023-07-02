import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

type ThemeProp = {
    children: JSX.Element
};

enum themePalette {
    BG = "#10002b",
    COLOR_VIOLET = "#c77dff",
    BG_PAPER= "#240046",
    //Alert styles
    ERROR_MAIN ="#ffffff",
    BG_ERROR_MAIN = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,81,1) 35%, rgba(255,0,112,1) 100%);"
}

const theme = createTheme({
    palette:{
        mode:"dark",
        background:{
            default: themePalette.BG,
        },
        primary: {
            main: themePalette.COLOR_VIOLET
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: "capitalize",
                    borderRadius: "0.5em"
                }
            },
        },
        MuiPaper:{
            defaultProps:{
                style:{
                    backgroundColor: themePalette.BG_PAPER
                }
            }
        },
        MuiAlert:{
            defaultProps:{
                style:{
                    borderRadius:"0.8em",
                    fontSize: "1em"
                }
            },
            styleOverrides:{
                standardError:{
                    border:`1px solid ${themePalette.ERROR_MAIN}`,
                    background: themePalette.BG_ERROR_MAIN
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