import classes from "../components/Categories.module.css";
import arrowRight from "../assets/right-arrow-svgrepo-com.svg";
import rec2 from "../assets/rec_2.png";
import rec4 from "../assets/rec_4.jpg";
import rec3 from "../assets/rec_3.jpg";

export default function Categories() {
  return (
    <div className={classes.cagtegories}>
      <div className={classes.heading}>
        <span>
          <h4>Categories</h4>
          <h5>Explore our Top Categories</h5>
        </span>
        <div className={`${classes["categories-button"]}`}>
          <button className={classes.selected}>
            <img src={arrowRight} alt="" />
          </button>
          <button>
            <img src={arrowRight} alt="" />
          </button>
        </div>
      </div>
      <div className={classes.ad}>
        <span>
          <img src={rec2} alt="" />
          <h2>Higher Education</h2>
        </span>
        <span>
          <img src={rec3} alt="" />
          <h2>Management Books</h2>
        </span>
        <span>
          <img src={rec4} alt="" />
          <h2>Engineering Books</h2>
        </span>
      </div>

      <a href="#" className={`${classes["btn--outline"]}`}>
        VIEW MORE
      </a>
    </div>
  );
}
