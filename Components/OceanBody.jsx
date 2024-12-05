import React from 'react';
import { motion } from 'framer-motion';

export default function OceanBody() {
  return (
    <motion.div
      className="relative w-full h-[500px] bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(180deg, #60A5FA 0%, #2563EB 100%)",
            "linear-gradient(180deg, #3B82F6 0%, #1D4ED8 100%)"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-blue-700 opacity-50"
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Silhouette humaine */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg
          width="200"
          height="400"
          viewBox="0 0 200 400"
          className="text-white opacity-30"
        >
          <motion.path
            d="M100 50 C130 50 150 80 150 120 C150 160 130 190 100 190 C70 190 50 160 50 120 C50 80 70 50 100 50"
            fill="currentColor"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          {/* Corps stylisé */}
          <motion.path
            d="M70 190 L70 350 M130 190 L130 350 M70 350 L50 400 M130 350 L150 400 M100 190 L100 300"
            stroke="currentColor"
            strokeWidth="20"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>
    </motion.div>
  );
}