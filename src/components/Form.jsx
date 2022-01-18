import { useName } from '../context/nameContext';

const Form = () => {
  const { name, updateName } = useName();
  return name ? (
    <div className="form">
      <label htmlFor="name">Circle Name</label>
      <div className="sec-2">
        <input
          type="text"
          name="name"
          placeholder="Circle Name"
          value={name}
          onChange={(e) => updateName(e.target.value)}
        />
      </div>
    </div>
  ) : null;
};

export default Form;
