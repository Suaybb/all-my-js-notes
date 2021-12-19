let val;

val = window.document;
val = document.all; // All html collections
val = document.all.length;// Collections length
val = document.all[10];// You can choose one of them
val = document.head;// Choose only head element
val = document.body;// You can choose body element same time
val = document.anchors;// Choose all links
val = document.URL;// Choose Url
val = document.domain// Choose only domain
val = document.images;// Choose images
val = document.title;// Choose site title
val = document.forms;// Choose all forms elements
val = document.forms[0];// Choose first element of forms
val = document.forms[0].id;// Choose id attribute first element of form
val = document.forms[0].method;// Choose forms method
val = document.forms[0].action;// Choose actions method
val = document.scripts;// Choose all scripts elements
val = document.scripts[2];// Choose third scripts element from all scripts 
val = document.scripts[1].getAttribute('src'); 

console.log(val);