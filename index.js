
    const form = document.getElementById('registrationForm');
    const tableBody = document.querySelector('#entriesTable tbody');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const dob = document.getElementById('dob').value;
      const accepted = document.getElementById('acceptTerms').checked;

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>${dob}</td>
        <td>${accepted}</td>
      `;
      tableBody.appendChild(row);
      form.reset();
    });
  
