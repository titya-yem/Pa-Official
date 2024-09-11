import PerfumeBottle from "../assets/Pa Perfume Bottle.png";
import BackOfBox from "../assets/back side of the box.png";
import SideOfBox from "../assets/Side of the box.png";

const ProductLeft = () => {
  return (
    <div>
      <div className="grid place-items-center gap-6 rounded-lg px-6 pb-6 bg-[#BCBCBC]">
        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <img
            className="md:h-[250px] w-56"
            src={PerfumeBottle}
            alt="Pa Perfume Bottle"
          />
          <img className="w-56" src={BackOfBox} alt="Pa Back of the perfume" />
        </div>
        <div>
          <img
            className="md:w-[620px] rounded-lg"
            src={SideOfBox}
            alt="Pa right side of perfume"
          />
        </div>
        <div className="grid gap-4 text-sm lg:text-[16px] md:6 md:w-[620px] rounded-md *:mx-4 bg-[#F5F5F5]">
          <p>“ប៉ា” fragrance:</p>
          <p>
            We spend about 4 months to completed the project and check for the
            finest and best ingredient for the fragrance.​ ”ប៉ា” means father or
            dad, we want to bring the memories of yours about dad. We tried to
            check the quality of the fragrance and tests by expert.
          </p>
          <p>
            The product is good for general use and could be a gift for the
            person we love (Dad).
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductLeft;
