import PropTypes from 'prop-types';
const Button1 = ({name}) => {
  return (
    <button className="bg-[#7C3AED] text-[var(--clr-light-gray)] px-4 md:px-6 py-2 rounded hover:scale-90 duration-300 font-bold text-sm md:text-base" >
      {name}
    </button>
  );
};

Button1.propTypes = {
  name: PropTypes.string
}

export default Button1;