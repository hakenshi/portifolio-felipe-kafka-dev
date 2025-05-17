import { motion } from "motion/react";

export function Blobs() {
  const commonChance = Math.random() < 0.5;
  const commonX = Math.floor(Math.random() * 200 - 100);
  const commonY = Math.floor(Math.random() * 200 - 100);

  const generateKeyframes = () => ({
    x: [
      0,
      Math.floor(Math.random() * 200 - 100),
      commonChance ? commonX : Math.floor(Math.random() * 200 - 100),
      Math.floor(Math.random() * 200 - 100),
      0,
    ],
    y: [
      0,
      Math.floor(Math.random() * 200 - 100),
      commonChance ? commonY : Math.floor(Math.random() * 200 - 100),
      Math.floor(Math.random() * 200 - 100),
      0,
    ],
  });

  const keyframes1 = generateKeyframes();
  const keyframes2 = generateKeyframes();

  return (
    <>
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={keyframes1}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 h-[400px] w-[400px] bg-red-500/20 blur-[100px]"
      />
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={keyframes2}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-red-500/20 blur-[100px]"
      />
    </>
  );
}
