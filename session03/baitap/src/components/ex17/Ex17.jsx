import React from "react";
import Questions from "./Questions";
import Answer from "./Answer";

export default function Ex17() {
  // Danh sách câu hỏi và đáp án
  const questions = [
    { question: "Câu hỏi 1: 2 + 2 = ?", answer: "4" },
    { question: "Câu hỏi 2: 5 + 3 = ?", answer: "8" },
    { question: "Câu hỏi 3: 10 - 4 = ?", answer: "6" },
  ];

  // State quản lý câu hỏi hiện tại và điểm số
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  // Hàm xử lý khi người dùng trả lời
  const handleSubmit = () => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (userAnswer === correctAnswer) {
      setScore(score + 1); // Tăng điểm nếu trả lời đúng
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Tiến tới câu hỏi tiếp theo
    } else {
      alert("Bạn đã hoàn thành bài kiểm tra!");
    }
    setUserAnswer(""); // Reset lại câu trả lời người dùng
  };

  return (
    <div>
      <Questions question={questions[currentQuestionIndex].question} />
      <Answer
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
        handleSubmit={handleSubmit}
      />
      <p>Điểm hiện tại: {score}</p>
    </div>
  );
}
