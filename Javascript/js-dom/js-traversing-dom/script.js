// Traversing DOM

let val;

let list = document.querySelector('.list-group');

val = list;
val = list.childNodes;
// val = list.children;

// // val = list.childNodes[0];
// // val = list.childNodes[0].nodeName;
// // val = list.childNodes[0].nodeType; // if childnodes text, it will return 3
// // val = list.childNodes[1].nodeType; // if childnodes element, it will return 1

// // val = list.children;
// // val = list.children[0];
// // val = list.children[1];

// // val = list.children[2].textContent = 'New item'; // We remove li element inner
// // val = list.children[2].children; // and a tag is gone
// // val = list.children[3].children;

// // val = list.firstChild; // First node element will return
// // val = list.firstElementChild; // Firts htmlcollection element will return

// // val = list.childElementCount;
// // val = list.parentNode;
// // val = list.parentElement;

// // val = list.nextSibling;

val = list.children[0].nextSibling;

// val = list.children[1].previousSibling;
// val = list.children[1].previousElementSibling;

// val = list.childNodes;

// val.forEach(function (item) {
//     if (item.nextSibling == null) {
//         console.log(item);
//     } else
//         console.log(item.nextSibling);
// });

 console.log(val);