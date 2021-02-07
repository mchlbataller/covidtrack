import 'fontsource-open-sans';

import blue from '@material-ui/core/colors/blue'
// Theme values for the ThemeProvider by Material-UI
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette: {
        background: {
            default: "#000E1C",
        },
        primary: {
            main: blue[900],
        },
        secondary: {
            main: '#11838A',
        }
    },
    typography: {
        fontFamily: [
            '"Open Sans"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }

});

export default theme;