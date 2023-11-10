import React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content", textAlign }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            // alert("Sample123")
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ width: width, textAlign: textAlign }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;