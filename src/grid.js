import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';



export default function Grid() {
return(
    <Box sx={{backgroundColor: 'black', marginTop: '-110px'}}>
   <Box sx={{backgroundColor: 'black'}}>
   <Typography 
        variant="h4"
        sx={{marginLeft: "600px",
            color: '#F5C6C1',
          animation: 'popup 1s ease-out', 
          '@keyframes popup': {
            '0%': {
              opacity: 0,
              transform: 'scale(0.5)',
            },
            '100%': {
              opacity: 1,
              transform: 'scale(1)',
            },
          },
        }}
      >
        CINEMA TREASURE
      </Typography>
      </Box>

<div  style={{ display: 'flex', flexdirection: 'row'  }}>
    <img
src= "GK.jpg"
alt="Description" 
style={{width: "1020px", 
height:"600px", 
marginLeft: "240px",
marginBottom: "100rem",
borderRadius: "10px"}}
/>
</div>
<div style={{color: 'white', marginLeft: "250px", marginTop: '-98rem', textShadow: "white"}}>
<h2>Top Picks</h2>
</div>
</Box>


);
}