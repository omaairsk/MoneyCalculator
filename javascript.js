import { useState } from "react";
import { motion } from "framer-motion";

export default function MoneyCalculator() {
  const [notes, setNotes] = useState({
    2000: "",
    1000: "",
    500: "",
    200: "",
    100: "",
    50: "",
    10: "",
  });

  const handleChange = (e, note) => {
    const value = e.target.value.replace(/\D/, "");
    setNotes({ ...notes, [note]: value });
  };

  const totalAmount = Object.entries(notes).reduce((sum, [note, count]) => {
    return sum + (parseInt(note) * (parseInt(count) || 0));
  }, 0);

  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-md transform hover:scale-105 transition duration-300"
      >
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Money Calculator</h2>
        <div className="space-y-3">
          {Object.keys(notes).map((note) => (
            <motion.div 
              key={note} 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * Object.keys(notes).indexOf(note) }}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-xl shadow-md"
            >
              <label className="text-lg font-semibold">₹{note}:</label>
              <input
                type="text"
                value={notes[note]}
                onChange={(e) => handleChange(e, note)}
                className="w-20 p-2 border rounded-lg text-right bg-white shadow-inner"
                placeholder="0"
              />
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 p-4 bg-blue-200 rounded-xl text-center shadow-md"
        >
          <h3 className="text-lg font-bold text-gray-800">Total Amount: ₹{totalAmount}</h3>
        </motion.div>
      </motion.div>
    </div>
  );
}
