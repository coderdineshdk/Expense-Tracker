document.addEventListener('DOMContentLoaded', () => {
   const addTransactionForm = document.querySelector('.add-transaction form');
   const transactionList = document.querySelector('.transaction-list ul');
  
   addTransactionForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(addTransactionForm);
      const transaction = {
        id: Date.now(),
        description: formData.get('description'),
        amount: parseFloat(formData.get('amount')),
        type: formData.get('type'),
      };
      // Store transaction in local storage
      addTransactionToList(transaction);
   });
  
   // Function to render the transaction list
   function addTransactionToList(transaction) {
      const listItem = document.createElement('li');
      listItem.textContent = `${transaction.description}: $${transaction.amount}`;
      transactionList.appendChild(listItem);
   }
  });
  
  let ctx = document.getElementById('spendingChart').getContext('2d');
  let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Groceries', 'Entertainment', 'Restaurants', 'Travel'],
          datasets: [{
              label: 'Expenditure',
              data: [100, 150, 75, 225],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });