const apiUrl = 'http://127.0.0.1:8000/api/expense/'

// GET // 

const btnGet = document.getElementById("btn-get"); // Obtenemos la referencia al botón de obtención de datos

// Añadimos el listener para el botón de obtención de datos
btnGet.addEventListener("click", () => {
  fetch(apiUrl)
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok ' + res.statusText);
      }
      return res.json();
    })
    .then(data => {
      let container = document.getElementById("expenseData");
      container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos registros de gastos
      data.forEach(exp => {
        let expense = new Expense(exp); // Crear instancia de la clase Expense
        container.appendChild(expense.createDiv()); // Agregar el div del expense al contenedor
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
});

class Expense {
  constructor({ category, expense_detail, currency, amount, date }) {
    this.category = category;
    this.expense_detail = expense_detail;
    this.currency = currency;
    this.amount = amount;
    this.date = date;
  }

  // Método para crear un div con los detalles del gasto
  createDiv() {
    const div = document.createElement('div');
    div.classList.add('expense-item');

    const category = document.createElement('div');
    category.textContent = `Category: ${this.category}`;
    div.appendChild(category);

    const detail = document.createElement('div');
    detail.textContent = `Detail: ${this.expense_detail}`;
    div.appendChild(detail);

    const currency = document.createElement('div');
    currency.textContent = `Currency: ${this.currency}`;
    div.appendChild(currency);

    const amount = document.createElement('div');
    amount.textContent = `Amount: ${this.amount}`;
    div.appendChild(amount);

    const date = document.createElement('div');
    date.textContent = `Date: ${this.date}`;
    div.appendChild(date);

    return div;
  }
}


// POST //

const btnPostForm = document.getElementById("btn-post-form"); // Selección del botón para mostrar el formulario
const form = document.getElementById("charge_expense_form"); // Selección del formulario a mostrar

btnPostForm.addEventListener("click", () => {
  form.style.display = "block"; // Cambiar el estilo del formulario para mostrarlo
});

const btnPost = document.getElementById("btn-post") // Obtenemos la referencia al botón de envío del formulario

function addExpense() {
  // Definimos la función para agregar un gasto
  const form = document.getElementById('charge_expense_form');
  const formData = new FormData(form);

  // Construimos el objeto de gastos a partir de los datos del formulario
  const expense = {
    category: formData.get('category'),
    expense_detail: formData.get('expense_detail'),
    currency: formData.get('currency'),
    amount: parseFloat(formData.get('amount')),
    date: formData.get('date')
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(expense) // Convertimos el objeto de gastos a JSON
  })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok ' + res.statusText);
      }
      return res.json();
    })
    .then(data => {
      alert('Expense added successfully!');
      form.reset(); // Limpiamos el formulario después de enviar los datos
      // fetchExpenses(); // Llamamos a una función para actualizar la lista de gastos (si existe)
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      alert('There was an error adding the expense. Please try again.');
    });
}

// Añadimos el listener para el botón de envío del formulario
btnPost.addEventListener("click", (e) => {
  e.preventDefault(); // Evitamos el comportamiento predeterminado de enviar el formulario y recargar la página
  addExpense(); // Llamamos a la función para agregar el gasto
});


// PUT //



// DELETE //

function deleteExpense() {
  const expenseId = prompt("Enter Expense ID to delete:");

  fetch(apiUrl + expenseId + '/', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      alert('Expense deleted!');
      fetchExpenses();
    });
}