const quotes = [
  "Great job! Keep pushing forward!",
  "You're one step closer to your goals!",
  "Consistency is the key to success.",
  "Small progress is still progress!",
  "You're doing amazing, keep it up!"
];


const subjects = [];
document.getElementById("subject-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("subject-name").value;
  const grade = document.getElementById("subject-grade").value;

  subjects.push({ subject: name, grade: grade });

  
  const div = document.createElement("div");
  div.className = "subject";
  div.textContent = `${name}: ${grade}`;
  document.getElementById("subjects-container").appendChild(div);

  document.getElementById("subject-form").reset();
});

document.getElementById("finish-btn").addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-box").textContent = quotes[randomIndex];

  console.log("Subjects data (as JSON):", JSON.stringify(subjects, null, 2));
});


