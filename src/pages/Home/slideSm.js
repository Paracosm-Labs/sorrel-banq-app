import React from "react";
import { UncontrolledCarousel } from "reactstrap";

// Carousel images
import img1 from "../../assets/images/jumbotron-sm.svg";
import img2 from "../../assets/images/slideShowSm2.jpg";
import img3 from "../../assets/images/slideShowSm3.jpg";
const SlideSm = () => {
  return (
    <React.Fragment>
      <UncontrolledCarousel
        controls={false}
        indicators={false}
        interval={3000}
        items={[
          {
            altText: " ",
            caption: " ",
            key: 1,
            src: img1,
          },
          {
            altText: " ",
            caption: " ",
            key: 2,
            src: img2,
          },
          {
            altText: " ",
            caption: " ",
            key: 3,
            src: img3,
          },
        ]}
      />
    </React.Fragment>
  );
};

export default SlideSm;
