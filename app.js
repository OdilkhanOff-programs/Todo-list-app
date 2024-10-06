// DOM elementlarini olish
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const addBtn = document.getElementById("add-btn");

// Vazifa qo'shish funktsiyasi
function addTodo() {
  const todoText = todoInput.value.trim(); // Kiritilgan vazifa

  if (todoText === "") return; // Bo'sh kiritishni oldini olish

  const listItem = document.createElement("li"); // Yangi <li> elementi yaratish
  listItem.textContent = todoText; // Vazifa matnini <li> ga qo'shish

  // O'chirish tugmasini yaratish
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "O'chirish";
  deleteBtn.onclick = function () {
    listItem.remove(); // O'chirish tugmasini bosganda elementni o'chirish
  };

  // Vazifani bajarilgan sifatida belgilash
  listItem.onclick = function () {
    listItem.classList.toggle("completed"); // Bajarilgan vazifaga chiziq chizish
  };

  listItem.appendChild(deleteBtn); // O'chirish tugmasini <li> ga qo'shish
  todoList.appendChild(listItem); // <li> elementini ro'yxatga qo'shish
  todoInput.value = ""; // Inputni tozalash
}

// + Tugmasini bosganda vazifa qo'shish
addBtn.addEventListener("click", addTodo);
