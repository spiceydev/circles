import { useName } from '../context/nameContext';

const CircleName = () => {
  const { name } = useName();
  return (
    <div className="curved-text">
      <svg
        viewBox="84.572 69.463 110.749 47.705"
        width="110.749"
        height="47.705"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 202.538 129.121 A 44.162 44.162 0 0 1 158.376 173.283 A 44.162 44.162 0 0 1 114.214 129.121 A 44.162 44.162 0 0 1 158.376 84.959 A 44.162 44.162 0 0 1 202.538 129.121 Z"
          style={{ fillOpacity: 0, fill: 'none' }}
          id="path-2"
        />
        <text
          style={{
            fill: 'rgb(255, 255, 255)',
            fontFamily: 'Raleway',
            fontSize: '18px',
            whiteSpace: 'pre',
          }}
          transform="matrix(1, 0, 0, 1, -17.317595, 1.667384)"
          x="159.339"
          y="83.295"
        >
          <textPath startOffset="-5" xlinkHref="#path-2">
            {name}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CircleName;
