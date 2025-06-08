const monthYear = document.getElementById("month-year");
const daysContainer = document.getElementById("days");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const eventBox = document.getElementById("event-box");
const selectedDateEl = document.getElementById("selected-date");
const eventInput = document.getElementById("event-input");
const saveEventBtn = document.getElementById("save-event");
let selectedKey = "";

let events = JSON.parse(localStorage.getItem("calendarEvents") || "{}");


function renderCalendar(month, year) {
  daysContainer.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  monthYear.textContent = `${months[month]} ${year}`;

  
  for (let i = 0; i < firstDay; i++) {
    daysContainer.innerHTML += `<div></div>`;
  }

  for (let day = 1; day <= totalDays; day++) {
  const dateKey = `${year}-${month + 1}-${day}`;
  const div = document.createElement("div");
  div.textContent = day;

  if (events[dateKey]) {
    const eventDot = document.createElement("span");
    eventDot.textContent = " 📌";
    div.appendChild(eventDot);
  }

  div.addEventListener("click", () => {
    selectedKey = dateKey;
    eventInput.value = events[dateKey] || "";
    selectedDateEl.textContent = `Event for ${months[month]} ${day}, ${year}`;
    eventBox.style.display = "block";
  });

  daysContainer.appendChild(div);
}

}

prevBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);
saveEventBtn.addEventListener("click", () => {
  const text = eventInput.value.trim();
  if (text) {
    events[selectedKey] = text;
  } else {
    delete events[selectedKey]; 
  }
  localStorage.setItem("calendarEvents", JSON.stringify(events));
  eventBox.style.display = "none";
  renderCalendar(currentMonth, currentYear);
});

