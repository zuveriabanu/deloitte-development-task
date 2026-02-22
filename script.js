const questions = [
  {
    question: "In which city was India’s first national police museum inaugurated?",
    options: ["Chennai", "Delhi", "Kolkata", "Mumbai"],
    answer: "Delhi"
  },
  {
    question: "Which country hosted the G7 Summit 2019?",
    options: ["USA", "France", "Germany", "Japan"],
    answer: "France"
  },
  {
    question: "Who won the French Open 2018 (Men's Singles)?",
    options: ["Roger Federer", "Novak Djokovic", "Rafael Nadal", "Andy Murray"],
    answer: "Rafael Nadal"
  },
  {
    question: "Who wrote Arthashastra?",
    options: ["Kalidasa", "Chanakya", "Tulsidas", "Kabir"],
    answer: "Chanakya"
  },
  {
    question: "Which is the largest dry desert in the world?",
    options: ["Thar", "Sahara", "Gobi", "Kalahari"],
    answer: "Sahara"
  },
  {
    question: "Capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra"
  },
  {
    question: "Longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile"
  },
  {
    question: "Who is known as the Missile Man of India?",
    options: ["Dr. APJ Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "Ratan Tata"],
    answer: "Dr. APJ Abdul Kalam"
  },
  {
    question: "Which planet is known as Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "Who discovered gravity?",
    options: ["Newton", "Einstein", "Galileo", "Tesla"],
    answer: "Newton"
  }
];

let selectedQuestions = [];

// Shuffle and pick 5
function getRandomQuestions() {
  return questions.sort(() => 0.5 - Math.random()).slice(0, 5);
}

// Render questions
function loadQuiz() {
  selectedQuestions = getRandomQuestions();
  const container = document.getElementById("quizContainer");
  container.innerHTML = "";

  selectedQuestions.forEach((q, index) => {
    let questionHTML = `
      <div class="mb-4">
        <h6>${index + 1}. ${q.question}</h6>
    `;

    q.options.forEach(option => {
      questionHTML += `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="q${index}" value="${option}" required>
          <label class="form-check-label">${option}</label>
        </div>
      `;
    });

    questionHTML += `</div>`;
    container.innerHTML += questionHTML;
  });
}

loadQuiz();

// Submit logic
document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let score = 0;

  selectedQuestions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected.value === q.answer) {
      score++;
    }
  });

  // Store score
  localStorage.setItem("quizScore", score);

  // Redirect to result page
  window.location.href = "result.html";
});
