import apple from "../../assets/apple.png";
import cheeseburger from "../../assets/cheeseburger.png";
import chicken from "../../assets/chicken.png";
import energy from "../../assets/energy.png";
import PropTypes from "prop-types";

/**
* This function contains the Info part that is shown on the right of the screen on this website,
* in order to give information about calories, proteins, carbohydrates and lipids lost.
*/
function Info({ cal, prot, glu, lip }) {
  return (
    <div className="infos">
      <div className="infos--items">
        <div className="items--img red">
          <img src={energy} alt="flamme" />
        </div>
        <div className="item">
          <p>{cal}kCal</p>
          <span>Calories</span>
        </div>
      </div>
      <div className="infos--items">
        <div className="items--img blue">
          <img src={chicken} alt="poulet" />
        </div>
        <div className="item">
          <p>{prot}g</p>
          <span>Proteines</span>
        </div>
      </div>
      <div className="infos--items">
        <div className="items--img yellow">
          <img src={apple} alt="pomme" />
        </div>
        <div className="item">
          <p>{glu}g</p>
          <span>Glucides</span>
        </div>
      </div>
      <div className="infos--items">
        <div className="items--img rose">
          <img src={cheeseburger} alt="cheeseburger" />
        </div>
        <div className="item">
          <p>{lip}g</p>
          <span>Lipides</span>
        </div>
      </div>
    </div>
  );
}

export default Info;

Info.propTypes = {
  cal: PropTypes.number.isRequired,
  prot: PropTypes.number.isRequired,
  glu: PropTypes.number.isRequired,
  lip: PropTypes.number.isRequired,
};
