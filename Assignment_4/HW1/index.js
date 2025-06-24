const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

 
grandparent.addEventListener('click', () => {
    console.log('Grandparent (Capturing)');
}, true); // true = capturing ke liye


parent.addEventListener('click', () => {
    console.log('Parent (Capturing)');
}, true);

child.addEventListener('click', () => {
    console.log('Child (Capturing)');
});


 
grandparent.addEventListener('click', () => {
    console.log('Grandparent (Bubbling)');
}, true); 

parent.addEventListener('click', () => {
    console.log('Parent (Bubbling)');
}, false);

child.addEventListener('click', () => {
    console.log('Child (Bubbling)');
}, false);
