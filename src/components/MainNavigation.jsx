import classes from "./MainNavigation.module.css";
import { NavICons } from "../data/NavIcons";

export default function MainNavigation() {
  return (
    <div>
      <div className={`${classes["action-bar"]}`}>
        <p>
          <img src={NavICons.phone} alt="" className={classes.icon} />
          +91 8374902234
        </p>
        <div className={classes.social}>
          <a href="">
            <img src={NavICons.facebook} alt="" className={classes.icon} />
          </a>
          <a href="">
            <img src={NavICons.insta} alt="" className={classes.icon} />
          </a>
          <a href="">
            <img src={NavICons.linkedin} alt="" className={classes.icon} />
          </a>
          <a href="">
            <img src={NavICons.twitter} alt="" className={classes.icon} />
          </a>
          <a href="">
            <img src={NavICons.bloomberg} alt="" className={classes.icon} />
          </a>
        </div>
      </div>
      <nav>
        <img src={NavICons.logo} alt="" className={classes.logo} />

        <ul>
          <li>
            <a
              href="
                    "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="
          
          "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="
          
          "
            >
              Blog
            </a>
          </li>

          <li>
            <a
              href="
          
          "
            >
              Store
            </a>
          </li>
          <li>
            <a
              href="
          
          "
            >
              Contact
            </a>
          </li>
        </ul>
        <div className={`${classes["btn--group"]}`}>
          <button>
            <img src={NavICons.profile} alt="" />
          </button>
          <button>
            <img src={NavICons.cart} alt="" />
          </button>
          <button>
            <img src={NavICons.favorite} alt="" />
          </button>
        </div>
      </nav>
    </div>
  );
}
