import { Parallax} from "react-parallax";
import { PropTypes } from 'prop-types';

const Cover = ({ img, title, details }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero md:h-[600px] h-[450px]"
        
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{details}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {
  img:PropTypes.obj,
  title:PropTypes.string,
  details:PropTypes.string
};

export default Cover;
