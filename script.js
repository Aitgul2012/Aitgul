// --- Объект пользователя ---
const user = {
  name: "Айтгүл Бакирова",
  age: 13,
  city: "Ак Босого",
  interests: ["Программирование", "Музыка", "Рисование", "Игры"],
  scores: {math: 88, literature: 76, informatics: 92}
};

// --- Массив навыков ---
const skills = ["HTML", "CSS", "JavaScript", "Git", "Дизайн"];

// Подстановка данных
const nameEl = document.getElementById("name");
const aboutEl = document.getElementById("aboutText");
const skillsList = document.getElementById("skillsList");
const statsEl = document.getElementById("stats");
const profileData = document.getElementById("profileData");
const yearEl = document.getElementById("year");

nameEl.textContent = user.name;
aboutEl.textContent = `Привет, меня зовут Айтгүл, мне 13, я из Кыргызстана.`;

// Заполнение списка навыков (for)
for (let i = 0; i < skills.length; i++) {
  const li = document.createElement("li");
  li.textContent = skills[i];
  skillsList.appendChild(li);
}

// Средний балл из объекта (Object)
function calcAverage(scoresObj) {
  const values = Object.values(scoresObj);
  let sum = 0;
  for (let i = 0; i < values.length; i++) sum += values[i];
  return (sum / values.length).toFixed(1);
}

statsEl.textContent = "Самат атындагы жалпы билим берүү мектеби";

// Кнопка "Показать больше"
document.getElementById("showMoreBtn").onclick = () => {
  alert(`Интересы: ${user.interests.join(', ')}\nНавыки: ${skills.join(', ')}`);
};

// Печать объекта в формате JSON
profileData.textContent = JSON.stringify(user, null, 2);

// Год в футер
yearEl.textContent = new Date().getFullYear();
