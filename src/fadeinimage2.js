import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';

const FadeInImage2 = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 3000); // Toggle visibility every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    
    <Box sx={{marginLeft: '195px', marginTop: '-250px',
      opacity: visible ? 1 : 0,
      transition: 'opacity 1s ease-in-out',
    }}>
        
  <div style={{display: 'flex', flexdirection: 'row'  }}>
      <div>
        <img
          src="jawaani.jpg"
          alt="jawaani Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: '80px',
            borderRadius: "40px",
            boxShadow: 3
        }}

            />
            
            <div style={{color: '#C88D8D', marginLeft: '140px'}}>
            <p>Jawaani</p>
        </div>
        <div style={{marginLeft: '100px'}}>
            <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
             </div>
            
            </div>
        
            

     <div>
        <img
          src="badri.jpg"
          alt="badri Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: '80px',
            borderRadius: "40px",
            boxShadow: 3
        }}

            />
            
            <div style={{color: '#C88D8D', marginLeft: '80px'}}>
            <p>BADRI KI DHULANIYA</p>
          </div>
          <div style={{marginLeft: '100px'}}>
            
            
            <Rating name="half-rating" defaultValue={3} precision={0.5} />
             </div>
            
            </div>
            <div>
        <img
          src="uri.jpg"
          alt="uri Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: '80px',
            borderRadius: "40px",
            boxShadow: 3
        }}

            />
            
            <div style={{color: '#C88D8D', marginLeft: '130px'}}>
            <p>URI</p>
          </div>
          <div style={{marginLeft: '100px'}}>
            
            
            <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
            
            </div>

            <div>
        <img
          src="war.jpg"
          alt="war Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: '80px',
            borderRadius: "40px",
            boxShadow: 3
        }}

            />
            
            <div style={{color: '#C88D8D', marginLeft: '80px'}}>
            <p>WAR</p>
          </div>
          <div style={{marginLeft: '100px'}}>
             <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
             </div>
            
            </div>
            
          
          </div>
    </Box>
  );
};

export default FadeInImage2;
