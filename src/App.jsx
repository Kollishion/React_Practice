import React from "react";
// import Accordian from "./components/accordian/Accordian";
// import Random from "./components/random-color/random";
// import Star_Rate from "./components/star-rating/Star_Rate";
// import Image_Slider from "./components/image-slider/Image_Slider";
import Load_data from "./components/load-more-data/Load_data";

function App() {
  return (
    <div className="App">
      {/*ACcordian*/}
      {/* <Accordian /> */}
      {/*Random Color Component*/}
      {/* <Random /> */}
      {/* <Star_Rate noOfStars={10}/> */}
      {/* Image Slider */}
      {/* <Image_Slider url={"https://picsum.photos/v2/list"} limit={"10"} page={"1"}/> */}
      {/* Load More Products Component */}
      <Load_data />
    </div>
    
  );
}

export default App;
