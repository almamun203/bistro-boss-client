import { Helmet } from "react-helmet-async";
import Cover from "../../Home/Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/UseMenu";
import SectionTItle from "./../../../Components/SectionTItle/SectionTItle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Menu|Bistro Boss</title>
      </Helmet>
      <Cover
        img={menuImage}
        title={"our menu"}
        details={"Would you like to try a dish?"}
      ></Cover>
      <SectionTItle
        subheading={"--Don't Miss--"}
        heading={"Today's Offer"}
      ></SectionTItle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        img={dessertImg}
        title={"Dessert"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      <MenuCategory
        items={soup}
        img={soupImg}
        title={"Soup"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      <MenuCategory
        items={salad}
        img={saladImg}
        title={"Salad"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        img={pizzaImg}
        title={"Pizza"}
        details={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
