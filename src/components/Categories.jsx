import classes from "../components/Categories.module.css";
import arrowRight from "../assets/right-arrow-svgrepo-com.svg";

export default function Categories() {
  return (
    <div>
      <span>
        <h4>Categories</h4>
        <h5>Explore our Top Categories</h5>
      </span>

      <div>
        <button>
          <img src={arrowRight} alt="" />
        </button>
        <button>
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </div>
  );
}
