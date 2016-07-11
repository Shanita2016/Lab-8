var itemInput = document.getElementById("item");

   var clear = document.getElementById("clear");
   var add = document.getElementById("add");
   var list = document.getElementById("list");

   function addItem(){
     var currentItem = itemInput.value;
     var listItem = document.createElement("li");
     listItem.innerHTML = currentItem;
     list.appendChild(listItem);
     itemInput.value = "";
   }
   submit.onclick = addItem;
   clear.onclick = function() {
     list.innerHTML = "";
     itemInput.value = "";
   }
