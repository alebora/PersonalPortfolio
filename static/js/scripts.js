function toggleProject(summaryDiv) {
  const project = summaryDiv.closest(".project");
  project.classList.toggle("open");
}

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }
});

// Initialize with English as default if no language is saved in localStorage
let currentLanguage = localStorage.getItem('language') || "en"; 

// Function to toggle language between English and Spanish
function toggleLanguage() {
  // Switch between languages
  currentLanguage = currentLanguage === "en" ? "es" : "en";

  // Store the selected language in localStorage
  localStorage.setItem('language', currentLanguage);

  // Update text for each element with translation data
  document.querySelectorAll("[data-en]").forEach(element => {
    element.textContent = element.getAttribute(`data-${currentLanguage}`);
  });
}

// Call once to apply the language from localStorage on page load
window.onload = function() {
  document.querySelectorAll("[data-en]").forEach(element => {
    element.textContent = element.getAttribute(`data-${currentLanguage}`);
  });
};

const dogs = document.getElementById("dogs-img");

setInterval(() => {
  const random = Math.floor(Math.random() * dogsPhrases.length);
  message.textContent = dogsPhrases[random];
  message.style.opacity = 1;

  setTimeout(() => {
    message.style.opacity = 0;
  }, 4000);
}, 20000);


function filterItems(tag) {
  const items = document.querySelectorAll('.greenhouse-item');
  items.forEach(item => {
    item.style.display = (tag === 'all' || item.classList.contains(tag)) ? 'block' : 'none';
  });
}

function openModal(id) {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal-body').innerHTML = `<h2>Coming Soon</h2><p>This is a placeholder for "${id}".</p>`;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

const toggleButtons = document.querySelectorAll('.toggle-btn');
        
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const imagesDiv = button.nextElementSibling;
        if (imagesDiv.style.display === 'none' || imagesDiv.style.display === '') {
            imagesDiv.style.display = 'block';
            button.textContent = 'Hide Images';
        } else {
            imagesDiv.style.display = 'none';
            button.textContent = 'Show Images';
        }
    });
});
