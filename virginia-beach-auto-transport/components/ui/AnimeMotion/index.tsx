import { motion } from "framer-motion";
import React from "react";

type PositionType = 'fromRight' | 'fromLeft' | 'fromTop' | 'fromBottom';

interface IProps {
    from: PositionType;
    children: React.ReactNode;
};

const positions = {
    fromLeft: { initial: { x: -999 }, animate: { x: 0 } },
    fromRight: { initial: { x: 999 }, animate: { x: 0 } },
    fromTop: { initial: { y: -999 }, animate: { y: 0 } },
    fromBottom: { initial: { x: 999 }, animate: { y: 0 } }
};

const AnimeMotion: React.FC<IProps> = ({ children, from }) => {

    const variants = {
        initial: { opacity: 0, ...positions[from].initial },
        animate: { opacity: 1, transition: { delay: 1, duration: 1 }, ...positions[from].animate }
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
        >
            { children }
        </motion.div>
    )
};

export { AnimeMotion };