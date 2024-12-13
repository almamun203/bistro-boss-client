import { Link } from "react-router-dom";
import Cover from "../../Home/Shared/Cover/Cover";
import MenuItem from "../../Home/Shared/MenuItem/MenuItem";
import {PropTypes} from 'prop-types';

const MenuCategory = ({ items, title , img, details }) => {
  return (
    <div>
        {title && <Cover
        img={img}
        title={title}
        details={details}
      ></Cover>}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-14">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="mb-10 text-center">
      <Link to={`/order/${title}`}>
      <button className="btn   border-0 border-b-4 border-slate-800  ">Order Your Favorite Food</button>
      </Link>
      </div>
     
    </div>
  );
};
MenuCategory.propTypes = {
    items:PropTypes.array,
    title:PropTypes.string,
    img:PropTypes.obj,
    details:PropTypes.string
}

export default MenuCategory;
