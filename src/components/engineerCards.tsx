import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { trainersText } from "@/lib/textShown";

const EngineerCards: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1},
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1},
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {trainersText.trainers.map((trainer, index) => {
          const isCurrent = index === currentSlide;
          const isAdjacent =
            index === currentSlide - 1 || index === currentSlide + 1;

          const scale = isCurrent ? 1.2 : isAdjacent ? 1.05 : 0.9;

          return (
            <motion.div
              key={trainer.id}
              animate={{ scale: scale }}
              transition={{ duration: 0.3 }}
              className="p-4 flex justify-center"
            >
              <div className="rounded-lg bg-blue-600 text-center text-white shadow-lg p-4 relative my-14">
                <div className="bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full absolute top-2 left-2">
                  {trainer.title}
                </div>
                <div className="flex flex-col items-center gap-y-2 mt-8">
                  <div className="h-24 w-24 sm:h-28 sm:w-28 border-blue-400 border-2 rounded-full"></div>
                  <div className="space-y-2 mt-4">
                    <h3 className="text-sm sm:text-base">{trainer.name}</h3>
                    <p className="text-xs sm:text-sm">{trainer.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </Slider>
    </div>
  );
};

export default EngineerCards;
