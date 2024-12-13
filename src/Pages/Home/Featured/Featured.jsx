import SectionTItle from "../../../Components/SectionTItle/SectionTItle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <section className="pt-8">
        <div className="featured-item bg-fixed  text-white  ">
            <div className='bg-slate-400 bg-opacity-50 pt-10'>
            <SectionTItle
            
            heading={'--Check it out--'}
            subheading={'Featured Item'}
            ></SectionTItle>
            </div>
            <div className="md:flex justify-center items-center  py-10 px-14 md:py-20 bg-slate-400 bg-opacity-40">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10 ">
                <p>Aug 20,2025</p>
                <p className="uppercase">Where can i get some</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aperiam maxime, necessitatibus beatae similique saepe labore eveniet ab earum perferendis maiores culpa sint architecto alias! Modi eveniet rem, blanditiis quia eum quis. Aliquid eaque ut officiis veritatis esse suscipit inventore placeat enim, nostrum, explicabo ab ratione, maxime doloribus recusandae impedit.</p>
                <button className="btn btn-outline text-white border-0 border-b-4 rounded-none mt-4">Read More</button>
            </div>
        </div>
        </div>
        </section>
    );
};

export default Featured;