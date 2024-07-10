import book1 from "../../assets/book_1.jpg";
import classes from "../UI/BookCard.module.css";

export default function BookCard() {
  return (
    <div className={classes.card}>
      <img src={book1} alt="" />
      <h4>Simple Ways of Piece of Life</h4>
      <h5>Armor Ramsay</h5>
      <p>$40.00</p>
      <button>ADD TO CART</button>
    </div>
  );
}
