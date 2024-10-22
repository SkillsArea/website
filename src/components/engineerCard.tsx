"use client";
import { motion } from "framer-motion";

type Props = {
  name: string;
  description: string;
};

const EngineerCard = ({ name, description }: Props) => {
  return (
    <motion.div
      className="relative bg-[#023477] text-white w-full p-4 rounded-xl my-14 cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute top-2 left-2 bg-yellow-400 text-black rounded-full px-2 py-1 text-xs font-semibold">
        web
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[11rem] h-[11rem] bg-[#007AFF] rounded-full mb-4"></div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default EngineerCard;
