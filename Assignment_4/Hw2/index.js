const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

 
grandparent.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Grandparent clicked');
}, false); 

 
parent.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Parent clicked');
}, false);

 
child.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Child clicked');
}, false);
