import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import Rating from '@mui/material/Rating';



function ImageSlider() {
  const settings = {
    dots: true,             // Shows navigation dots
    infinite: true,         // Allows continuous scrolling
    speed: 500,             // Transition speed
    slidesToShow: 5,        // Number of images visible at once
    slidesToScroll: 1,      // Number of images to scroll at a time
    autoplay: true,         // Enables automatic scrolling
    autoplaySpeed: 3000,    // Delay between each scroll
  };

  return (
    <Box sx={{ backgroundColor: "black", padding: "20px", boxshadow: '0 0 30px 15px white' }}>
    {/* First Slider */}
    <Box sx={{ marginBottom: "20px" }}>
    <Slider {...settings}>
          <div>
        <img
          src="hanuman.jpg"
          alt="hanuman Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "10px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
        <div style={{color: '#C88D8D', marginLeft: '60px'}}>
            <p>HANUMAN</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
            
      </div>
      <div>
        <img
          src="puspa.jpg"
          alt="Puspa Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '60px'}}>
            <p>PUSPA</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
      <div>
        <img
          src="kalki movie poster.jpg"
          alt="Kalki Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '60px'}}>
            <p>KALKI</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
      <div>
        <img
          src="devara.jpg"
          alt="Devara Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '60px'}}>
            <p>DEVARA</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
      <div>
        <img
          src="saripodhu.jpg"
          alt="Saripodhu Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '60px'}}>
            <p>SARIPODHAA SANIVAARAM</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
      <div>
        <img
          src="salar.jpg"
          alt="Sarlar Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '60px'}}>
            <p>SALAR</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
      <div>
        <img
          src="hinana.jpg"
          alt="hi nana Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '60px'}}>
            <p>HI NANA</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
      <div>
        <img
          src="dasara.jpg"
          alt="dasara Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '60px'}}>
            <p>DASARA</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
      <div>
        <img
          src="animal.jpg"
          alt="animal Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '60px'}}>
            <p>ANIMAL</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
   </Slider>
  </Box>
</Box>

 );
}


export default ImageSlider;
          
      
  
