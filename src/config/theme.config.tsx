import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

type ThemeProp = {
    children: JSX.Element
};

enum themePalette {
    BG = "#10002b",
    // BG = "#f8f8f8",
    COLOR_VIOLET = "#c77dff",
    BG_PAPER= "#240046",
    //Alert styles
    MAIN_COLOR ="#ffffff",
    BLACK_COLOR= "#000000",
    BG_ERROR_MAIN = "#2a9d8f", //aguamarina
    BG_SUCCESS_MAIN = "#9d4edd", //violeta
    BG_INFO_MAIN = "#ff758f", //rosa
    BG_ALERT_MAIN = "#f2cc8f" //amarillo
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
                    border:`1px solid ${themePalette.MAIN_COLOR}`,
                    background: themePalette.BG_ERROR_MAIN,
                    color: themePalette.MAIN_COLOR
                },
                standardSuccess: {
                    border:`1px solid ${themePalette.MAIN_COLOR}`,
                    background: themePalette.BG_SUCCESS_MAIN,
                    color: themePalette.MAIN_COLOR
                }

            },
        },
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