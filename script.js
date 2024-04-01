//Name typing 
 const name = "Gifty Aning";
 let index = 0;
 const typingInterval = setInterval(type, 250);

 function type() {
   document.getElementById("typing").innerText = name.slice(0, index);
   index++;

   if (index > name.length) {
     clearInterval(typingInterval);
   }
 }
