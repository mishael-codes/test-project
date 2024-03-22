import img1 from "../../assets/images/grid/img1.png";
import img2 from "../../assets/images/grid/img2.png";
import img3 from "../../assets/images/grid/img3.png";
import img4 from "../../assets/images/grid/img4.png";
import img5 from "../../assets/images/grid/img5.png";
import img6 from "../../assets/images/grid/img6.png";
import img7 from "../../assets/images/grid/img7.png";
import img8 from "../../assets/images/grid/img8.png";
import img9 from "../../assets/images/grid/img9.png";
import img10 from "../../assets/images/grid/img10.png";
import img11 from "../../assets/images/grid/img11.png";
import img12 from "../../assets/images/grid/img12.png";
import img13 from "../../assets/images/grid/img13.png";
import Button from "../button";

// Interface for a grid item
interface GridItem {
  img: string; // Path to the image
  alt: string; // Alternative text for accessibility
  className: string;
}

// Dictionary of grid items
const gridItems: Record<string, GridItem> = {
  item1: { img: img1, alt: "Image 1", className: "item1" },
  item2: { img: img2, alt: "Image 2", className: "item2" },
  item3: { img: img3, alt: "Image 3", className: "item3" },
  item4: { img: img4, alt: "Image 4", className: "item4" },
  item5: { img: img5, alt: "Image 5", className: "item5" },
  item6: { img: img6, alt: "Image 6", className: "item6" },
  item7: { img: img7, alt: "Image 7", className: "item7" },
  item8: { img: img8, alt: "Image 8", className: "item8" },
  item9: { img: img9, alt: "Image 9", className: "item9" },
  item10: { img: img10, alt: "Image 10", className: "item10" },
  item11: { img: img11, alt: "Image 11", className: "item11" },
  item12: { img: img12, alt: "Image 12", className: "item12" },
  item13: { img: img13, alt: "Image 13", className: "item13" },
};

/* const GridStyle: React.CSSProperties = {
  width: "80%",
  display: 'grid',
  // gridTemplateColumns: 'repeat(3, 1fr)',
} */

const Grid: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "100px 0",
      }}
    >
      <div className="grid-container">
        {Object.values(gridItems).map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt={item.alt}
            className={`${item.className}`}
          />
        ))}
      </div>
      <div>
        <p style={{fontSize: "36px", fontFamily: "Montserrat-Medium, sans-serif"}}>Check out our blog for more</p>
        <Button text="Blog" />
      </div>
    </div>
  );
};

export default Grid;
