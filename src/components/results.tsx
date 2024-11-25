import Image from "next/image";
import React from "react";
import results from "../../public/img/FullBg.png";

export default function Results() {
  return (
    <div className="relative w-full">
      <Image
        alt=""
        src={results}
        width={1407}
        height={295}
        className="w-full"
      />
      <div className="w-full absolute top-1/3 flex justify-between items-center px-5 md:px-20 font-bold text-[#023477] text-xl md:text-6xl">
        <div className="text-center">
          <p>5/5</p>
          <p className="text-[#007AFF]">معدل التقييم</p>
        </div>
        <div className="text-center">
          <p>1000+</p>
          <p className="text-[#007AFF]">خريجين</p>
        </div>
        <div className="text-center">
          <p>100+</p>
          <p className="text-[#007AFF]">ساعات تدريبية</p>
        </div>
      </div>
    </div>
  );
}
