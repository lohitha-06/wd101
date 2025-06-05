// Helper: Get entries from localStorage
function getEntries() {
  return JSON.parse(localStorage.getItem("entries") || "[]");
}

// Helper: Save entries to localStorage
function saveEntries(entries) {
  localStorage.setItem("entries", JSON.stringify(entries));
}

// Helper: Render entries in the table
function renderEntries() {
  const tableBody = document.querySelector("#entriesTable tbody");
  tableBody.innerHTML = "";
  const entries = getEntries();
  entries.forEach((entry) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${entry.name}</td>
      <td>${entry.email}</td>
      <td>${entry.password}</td>
      <td>${entry.dob}</td>
      <td>${entry.accepted}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Helper: Validate email
function isValidEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Helper: Validate age between 18 and 55
function isValidAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age >= 18 && age <= 55;
}

document.addEventListener("DOMContentLoaded", function () {
  renderEntries();
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const accepted = document.getElementById("acceptTerms").checked;

    // Email validation
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // Age validation
    if (!isValidAge(dob)) {
      alert("Age must be between 18 and 55 years.");
      return;
    }

    const entry = { name, email, password, dob, accepted };
    const entries = getEntries();
    entries.push(entry);
    saveEntries(entries);
    renderEntries();
    form.reset();
  });
});
