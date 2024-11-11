import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import Rating from '@mui/material/Rating';



function SecondImageSlider() {
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
    <Box sx={{marginBottom: '300px'}}>
        <div style={{marginTop: '50px'}}>
    <Slider {...settings}>
          <div>
        <img
          src="friends.jpg"
          alt="friends Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "10px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
        <div style={{color: '#C88D8D', marginLeft: '60px'}}>
            <p>FRIENDS</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
            
      </div>
      <div>
        <img
          src="moneyheist.jpg"
          alt="moneyheist Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '60px'}}>
            <p>MONEY HEIST</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
      <div>
        <img
          src="GA.jpg"
          alt="GA Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '25px'}}>
            <p>GREEN HOUSE ACADEMY</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
      <div>
        <img
          src="GT.jpg"
          alt="GT Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '37px'}}>
            <p>GAME OF THRONES</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
      <div>
        <img
          src="BBT.jpg"
          alt="BBT Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '45px'}}>
            <p>BIG BANG THEORY</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
      <div>
        <img
          src="ST.jpg"
          alt="ST Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '60px'}}>
            <p>STRANGER THINGS</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
      <div>
        <img
          src="squidgame.jpg"
          alt="squidgame Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '40px'}}>
            <p>SQUID GAME</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
      <div>
        <img
          src="EP.jpg"
          alt="EP Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '40px'}}>
            <p>EMILY IN PARIS</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
      <div>
        <img
          src="wednesday.jpg"
          alt="wednesday Poster"
          style={{
            width: "180px",
            height: "255px",
            marginLeft: "15px",
            borderRadius: "40px",
            boxShadow: 3
          }}
        />
         <div style={{color: '#C88D8D', marginLeft: '60px'}}>
            <p>WEDNESDAY</p>
        </div>
        <div style={{marginLeft: '50px'}}>
             <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
             </div>
      </div>
   </Slider>
   </div>
  </Box>
</Box>

 );
}


export default SecondImageSlider;
          
      
  
