
import SectionTItle from "../../../Components/SectionTItle/SectionTItle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
  const [menu] =useMenu();
  const popular = menu.filter(item => item.category === 'popular');
 
  return (
    <section className="space-y-10 my-16">
      <SectionTItle
        subheading={"--Popular Items--"}
        heading={"From Our Menu"}
      ></SectionTItle>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-14">
        {
            popular.map(item=><MenuItem
            key={item._id}
            item={item}>
            </MenuItem>)
        }
      </div>
      <div className="justify-center flex  mb-12">
      <button className="btn   border-0 border-b-4 border-slate-800  ">View Full Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
