import './Puffs.scss';
import puff from "../../../assets/imgs/puff_single_color.png";

function Puffs() {

  return (
    <>
      <img src={puff} alt="puff" className="puff puff_1" />
      <img src={puff} alt="puff" className="puff puff_2" />
      <img src={puff} alt="puff" className="puff puff_3" />
      <img src={puff} alt="puff" className="puff puff_4" />
      <img src={puff} alt="puff" className="puff puff_5" />
    </>
  );
}

export default Puffs;