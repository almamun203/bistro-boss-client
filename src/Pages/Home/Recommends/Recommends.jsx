import SectionTItle from "../../../Components/SectionTItle/SectionTItle";
import slide from '../../../assets/home/slide2.jpg';


const Recommends = () => {
  return (
    <section className="mb-24 space-y-10">
      <SectionTItle
        subheading={"--Should Try--"}
        heading={"Chef Recommends"}
      ></SectionTItle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="card bg-base-200 hover:scale-105 transition-transform  rounded-none ">
        <figure>
          <img
            src={slide}
            className="h-64 md:h-96 "
            
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Pizza!</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
          <button className="btn   border-0 border-b-4 border-slate-800  ">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-200 hover:scale-105 transition-transform  rounded-none ">
        <figure>
          <img
            src={slide}
            className="h-64 md:h-96 "
            
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Pizza!</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
          <button className="btn   border-0 border-b-4 border-slate-800  ">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-200 hover:scale-105 transition-transform  rounded-none ">
        <figure>
          <img
            src={slide}
            className="h-64 md:h-96 "
            
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Pizza!</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
          <button className="btn   border-0 border-b-4 border-slate-800  ">Add to Cart</button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Recommends;
