import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Plan from "./Plan";
import Link from 'next/link';


export default function Framer() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  
  const item = {
    hidden: { opacity: 0, translateX: 0, translateY: 10 },
    show: { opacity: 1, translateX: 0, translateY: 0, transition: { ease:"easeIn", duration: 0.5 } }
  };

  const dropIn = {
    hidden: { opacity: 0, y: "-100vh" },
    show: { opacity: 1, y: "0", transition: { duration: 0.1, type: "spring", damping: 25, stiffness: 500 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const keys = [0, 1, 2, 3];
  const plans = keys.map(key => {
    return <motion.div key={key} variants={item}><Plan /></motion.div>;
  });

  return (
    <div className="relative w-full max-w-2xl px-4 md:px-24 mt-28" >
      <motion.div
        className="flex justify-evenly"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {plans}
      </motion.div>

      <motion.button
        className="bg-blue-500 border-white border rounded-md p-4 m-8 text-white hover:text-blue-500 hover:bg-white hover:border-blue-500"
        onClick={() => (modalOpen ? close() : open())}
      >
        Spring
      </motion.button>

      <AnimatePresence
        initial={false}
        mode='wait'
        onExitComplete={() => null}
      >
        {modalOpen &&
          <motion.div
            className="absolute left-40 top-10 h-96 w-96 bg-orange-400 flex justify-center items-center rounded-md border border-black"
            variants={dropIn}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <p>Modal is open</p>
          </motion.div>
        }
      </AnimatePresence>

      <button className="bg-red-500 border-white border rounded-md p-4 m-8 text-white hover:text-red-500 hover:bg-white hover:border-red-500">
        <Link href="/logo">
          Carousel
        </Link>
      </button>

    </div>
  );
}
