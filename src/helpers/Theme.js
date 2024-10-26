import { createTheme } from "@mui/material";

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';  
import '@fontsource/poppins/500.css';  
import '@fontsource/poppins/600.css'; 
import '@fontsource/poppins/700.css';  


const theme = createTheme({

    palette:{
        primary:{main:"#2AA7FF"},
        secondary:{main:"#1B3C74"},
        territory:{main:"#5C6169"},
        black:{main:"#000000"},
        white:{main:"#FFFFFF"},
        low:{main:"#ABB6C7"},
    },
    customGradients: {
        brandGradient: "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
      },
    typography:{
        fontFamily:"'Poppins', sans-serif",
        h1: {
            fontWeight:700
        },

        h2:{
            fontWeight:600
        },

        h3:{
            fontWeight:500
        },

        h4:{
            fontWeight:400
        },
        body1:{
            fontWeight:400
        },
        button:{
            fontWeight:500
        }

    }

})

export default theme;