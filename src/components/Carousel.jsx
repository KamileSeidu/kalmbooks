import book from "../assets/landing_book.png";
import classes from "../components/Carousel.module.css";

export default function Carousel() {
  return (
    <div className={`${classes["carousel-group"]}`}>
      <div className={`${classes["carousel-header"]}`}>
        <h1>Ipsun Dolar Si</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, tenetur
          dicta provident itaque quis soluta!
        </p>
        <button>Read More</button>
      </div>
      <img src={book} alt="" />
    </div>
  );
}
