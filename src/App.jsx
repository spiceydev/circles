import Attention from './components/Attention';
import CircleName from './components/CircleName';
import Form from './components/Form';
import OuterRing from './components/OuterRing';
import RingChip from './components/RingChip';
import SimonSaysBottomLeft from './components/simon-says/SimonSaysBottomLeft';
import SimonSaysBottomRight from './components/simon-says/SimonSaysBottomRight';
import SimonSaysTop from './components/simon-says/SimonSaysTop';
import ViewIcon from './components/ViewIcon';
import VisitIcon from './components/VisitIcon';
import { useChips } from './context/chipContext';

const App = () => {
  const { chips } = useChips();

  return (
    <div className="App">
      <div style={{ flex: 1 }}>
        <OuterRing />
        <SimonSaysTop />
        <SimonSaysBottomLeft />
        <SimonSaysBottomRight />
        <ViewIcon />
        <VisitIcon />
        <Attention />
        <CircleName />

        {chips.map((chip, index) => (
          <RingChip
            key={index}
            index={index}
            color={chip === 0 ? 'white' : chip === 1 ? 'black' : 'red'}
          />
        ))}
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default App;
