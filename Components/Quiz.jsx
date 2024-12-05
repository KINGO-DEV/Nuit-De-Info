import React, { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    id: 1,
    question: "Quel rôle jouent les phytoplanctons dans l'écosystème ?",
    options: [
      "Ils produisent 50% de l'oxygène mondial",
      "Ils décomposent les déchets marins",
      "Ils servent uniquement de nourriture aux poissons"
    ],
    correctAnswer: 0,
    fact: "Saviez-vous que nettoyer 1 km² d'océan pollué équivaut à soigner une infection pulmonaire humaine ?"
  },
  {
    id: 2,
    question: "Comment les courants océaniques sont-ils similaires au système sanguin ?",
    options: [
      "Ils transportent uniquement de l'eau froide",
      "Ils distribuent chaleur et nutriments à travers l'océan",
      "Ils ne se déplacent que dans une direction"
    ],
    correctAnswer: 1,
    fact: "Les courants océaniques transportent la chaleur comme nos vaisseaux sanguins, régulant la température globale !"
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFact, setShowFact] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowFact(true);
  };

  const nextQuestion = () => {
    setShowFact(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
        Soignez l'océan, sauvez le corps humain !
      </h2>

      {!showFact ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <p className="text-lg font-medium text-blue-900 mb-4">
            {questions[currentQuestion].question}
          </p>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 text-left bg-white rounded-lg shadow hover:bg-blue-50 transition-colors"
                onClick={() => handleAnswer(index)}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-600 text-white p-6 rounded-lg"
        >
          <p className="text-lg mb-4">{questions[currentQuestion].fact}</p>
          <button
            onClick={nextQuestion}
            className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors"
          >
            {currentQuestion < questions.length - 1 ? "Question suivante" : "Terminer le quiz"}
          </button>
        </motion.div>
      )}

      <div className="mt-6 text-center text-blue-800">
        Score: {score} / {questions.length}
      </div>
    </div>
  );
}