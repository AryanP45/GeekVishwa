import React,{ useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constants";
import ShoeCard from "../components/ShoeCard";

function Hero() {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center item-start w-full max-xl:padding-x pt-28">
        {/* <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p> */}
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Hello <span className="text-[#43a047] inline-block mt-3">Geeks !</span>
          </span> 
          <br/>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Learn, Practice, and Excel
          </p>
          <a href="#about-us">
          <Button className = "" label="Explore " iconURL={arrowRight} /></a>
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat, index) => (
              <div
              className="text-4xl font-palanquin font-bold" 
              key={index}>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </h1>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center">
        <img 
          src={bigShoeImg}
          alt="bigShoeimage1"
          width={610}
          height={500}
          className="object-contain relative z-10" 
          />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe)=>(
              <div key={shoe}>
                <ShoeCard 
                  imgURL ={shoe}
                  changeBigShoeImage = {(shoe) => setbigShoeImg(shoe)}
                  bigShoeImg = {bigShoeImg}  
                />
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}

export default Hero;
