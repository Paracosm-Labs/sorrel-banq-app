import PrismCode from "../../Components/Common/Prism";

// Slides Only

const slideOnlyCode = `
<!-- Slides Only -->
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
`;
const SlideOnlyExample = () => (
  <PrismCode
    code={slideOnlyCode}
    language={("js", "css", "html")}
    plugins={["line-numbers"]}
  />
);

export { SlideOnlyExample };
