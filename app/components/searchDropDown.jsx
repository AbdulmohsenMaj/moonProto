"use client";
import { motion } from "framer-motion";

// Simple non-functional animated search button
export default function SearchDropDown() {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 600, damping: 25 }}
      className="btn btn-ghost btn-circle"
      aria-label="Search"
      title="Search"
      onClick={(e) => {
        // Disabled: no search overlay/modal
        e.preventDefault();
      }}
    >
      <img
        src="/landing/icons/search.svg"
        alt="Search"
        width="20"
        height="20"
        className="w-5 h-5"
      />
    </motion.button>
  );
}