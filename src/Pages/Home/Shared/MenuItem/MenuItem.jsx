/* eslint-disable react/prop-types */



const MenuItem = ({item}) => {
    const{name,image,recipe,price}=item;
    return (
        <div className="flex space-x-4 my-8">
            <img  className=" w-[80px] h-[80px] rounded-bl-[40px] rounded-br-[30px] rounded-tr-[40px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-semibold text-xl">{name}---</h3>
                <p className='text-sm'>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};



export default MenuItem;