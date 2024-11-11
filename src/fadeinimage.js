import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';

const FadeInImage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 3000); // Toggle visibility every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    
    <Box sx={{marginLeft: '195px', marginTop: '35px',  padding: "10px",
      opacity: visible ? 1 : 0,
      transition: 'opacity 1s ease-in-out',
    }}>
        
  <div style={{display: 'flex', flexdirection: 'row'  }}>
      <div>
        <img
          src="thriller2.jpg"
          alt="thriller2 Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: '80px',
            borderRadius: "40px",
            boxShadow: 3
        }}

            />
            
            <div style={{color: '#C88D8D', marginLeft: '140px'}}>
            <p>BADLA</p>
        </div>
        <div style={{marginLeft: '100px'}}>
            <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
             </div>
            
            </div>
        
            

     <div>
        <img
          src="thriller1.jpg"
          alt="thriller1 Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: '80px',
            borderRadius: "40px",
            boxShadow: 3
        }}

            />
            
            <div style={{color: '#C88D8D', marginLeft: '80px'}}>
            <p>NICOLAS CAGE</p>
          </div>
          <div style={{marginLeft: '100px'}}>
            
            
            <Rating name="half-rating" defaultValue={3} precision={0.5} />
             </div>
            
            </div>
            <div>
        <img
          src="thriller6.jpg"
          alt="thriller6 Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: '80px',
            borderRadius: "40px",
            boxShadow: 3
        }}

            />
            
            <div style={{color: '#C88D8D', marginLeft: '130px'}}>
            <p>SIGHTLESS</p>
          </div>
          <div style={{marginLeft: '100px'}}>
            
            
            <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
            
            </div>

            <div>
        <img
          src="thriller4.jpg"
          alt="thriller4 Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: '80px',
            borderRadius: "40px",
            boxShadow: 3
        }}

            />
            
            <div style={{color: '#C88D8D', marginLeft: '80px'}}>
            <p>NICOLAS CAGE</p>
          </div>
          <div style={{marginLeft: '100px'}}>
             <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
             </div>
            
            </div>
            
          
          </div>
    </Box>
  );
};

export default FadeInImage;
