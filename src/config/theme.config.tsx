import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

type ThemeProp = {
    children: JSX.Element
};

enum themePalette {
    BG = "#f8f8f8",
    // BG = "#f8f8f8",
    COLOR_VIOLET = "#c77dff",
    COLOR_SALMON = '#e76f51',
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
        background:{
            default: themePalette.BG,
        },
        primary: {
            main: themePalette.BLACK_COLOR,
            light: themePalette.BG
        },
        secondary: {
            main: themePalette.COLOR_SALMON
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
        // MuiPaper:{
        //     defaultProps:{
        //         style:{
        //             backgroundColor: themePalette.BG
        //         }
        //     }
        // },
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
        MuiAppBar:{
            defaultProps:{
                style:{
                    backgroundColor: 'white',
                    color: 'black'
                }
            }
        },
    },
})

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return (   
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )       
}