const list = document.querySelectorAll('#categories > li');
console.log(`Number of categories: ${list.length}`);
console.log('\n');

list.forEach(listItem => {
  const heading = listItem.querySelector('h2');
  const subList = listItem.querySelectorAll('li');
  console.log(`Category: ${heading.textContent}`);
  console.log(`Elements: ${subList.length}`);
  console.log('\n');
});
