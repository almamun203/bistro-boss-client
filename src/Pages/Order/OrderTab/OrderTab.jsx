import Card from "../../../Components/Card/Card";
import { PropTypes } from 'prop-types';


const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-16">
        {items.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
        </div>
    );
};

OrderTab.propTypes={
    items:PropTypes.array
}

export default OrderTab;