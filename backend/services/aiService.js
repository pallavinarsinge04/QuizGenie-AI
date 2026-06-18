exports.generateQuiz = async (topic, difficulty) => {
  return {
    questions: [
      {
        question: `What is ${topic}?`,
        options: [
          "A programming language",
          "A database",
          "A framework",
          "An operating system"
        ],
        answer: "A programming language"
      },
      {
        question: `Which is used in ${topic}?`,
        options: ["HTML", "Banana", "Car", "Water"],
        answer: "HTML"
      }
    ]
  };
};