
document.addEventListener("DOMContentLoaded", function () {
  fetch('https://github.com/osama-sayah/WSP_HW1/blob/main/data.js')
  .then(response => response.json())
  .then(data => console.log(data));
});

// function displayProducts(productsData) {
//   const flexContainer = document.getElementById('flexContainer');

//   // Clear existing flex items
//   flexContainer.innerHTML = '';

//   // Create flex items for each data item
//   productsData.forEach(item => {
//       const flexItem = document.createElement('div');
//       flexItem.classList.add('flexItem');
//       flexItem.innerHTML = `
//           <p>ID: ${item.id}</p>
//           <p>Name: ${item.name}</p>
//           <!-- Add more content as needed -->
//       `;
//       flexContainer.appendChild(flexItem);
//   });
// }
