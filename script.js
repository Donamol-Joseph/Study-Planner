const quotes = [
  "Work hard in silence. Let your success be your noise.",
  "Success is built on consistency.",
  "Your future is created by what you do today, not tomorrow.",
  "Believe you can and you're halfway there."
];
let i = 0;

function showQuote() {
  document.getElementById("quote").innerText = quotes[i];
  i = (i + 1) % quotes.length;
  setTimeout(showQuote, 2000);
}
window.onload = showQuote;





