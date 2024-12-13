import { PropTypes } from 'prop-types';


const SectionTItle = ({ heading, subheading }) => {

  return (
    <div className="">
      <p className=" text-orange-400 italic text-lg text-center font-semibold lg:text-xl">
        {subheading}
      </p>
      <div className="border-y-4 border-solid mx-10 lg:mx-48 mt-6 mb-6 py-4">
        <h3 className="text-xl md:text-3xl font-bold text-center uppercase">
          {heading}
        </h3>
      </div>
    </div>
  );
};

SectionTItle.propTypes={
  heading:PropTypes.string,
  subheading:PropTypes.string
}


export default SectionTItle;
