const selectHeader = document.querySelector('.select-header');
const selectArrow = document.querySelector('.select-arrow');
const selectSearch = document.querySelector('.select-search');
const selectOptions = document.querySelector('.select-options');
const selectText = document.querySelector('.select-text');
const selectInput = document.querySelector('.select-search input');

const locations = [
  'Himalaya 1',
  'Himalaya 2',
  'Himalaya 3',
  'Himalaya 4',
  'Himalaya 5',
  'Himalaya 6',
  'Himalaya 7',
  'Himalaya 8',
  'Himalaya 9',
  'Himalaya 10'
];

// Toggle options visibility
selectHeader.addEventListener('click', () => {
  selectOptions.classList.toggle('show');
  selectSearch.style.display = 'block';
  selectInput.focus();
});

// Handle option selection
selectOptions.addEventListener('click', (event) => {
  if (event.target.classList.contains('option')) {
    selectText.textContent = event.target.textContent;
    selectOptions.classList.remove('show');
    selectSearch.style.display = 'none';
  }
});

// Handle search input
selectInput.addEventListener('input', () => {
  const query = selectInput.value.toLowerCase();
  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(query)
  );
  displayFilteredOptions(filteredLocations);
});

// Display filtered options
function displayFilteredOptions(filteredLocations) {
  selectOptions.innerHTML = '';
  filteredLocations.forEach((location) => {
    const option = document.createElement('div');
    option.classList.add('option');
    option.textContent = location;
    selectOptions.appendChild(option);
  });
  selectOptions.classList.add('show');
}

// 12-07 //
