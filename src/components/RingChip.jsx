import RingChipBlack from '../assets/ring-chip-black.svg';
import RingChipRed from '../assets/ring-chip-red.svg';
import RingChipWhite from '../assets/ring-chip.svg';

const RingChip = ({ color = 'white', index }) => (
  <img
    src={
      color === 'white'
        ? RingChipWhite
        : color === 'black'
        ? RingChipBlack
        : RingChipRed
    }
    className={`chip chip${index}`}
    alt=""
  />
);
export default RingChip;
