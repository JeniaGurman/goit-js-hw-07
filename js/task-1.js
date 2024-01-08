const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('.item');

categoryItems.forEach(categoryItem => {
    
    const categoryName = categoryItem.querySelector('h2').textContent;

        const categoryElements = categoryItem.querySelectorAll('ul > li');
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
  
});
