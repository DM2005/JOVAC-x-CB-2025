
const menuItem = document.getElementById("menu");

menuItem.addEventListener("click",(event)=>{
    if(event.target.tagName === "LI"){
        console.log("Clicked On:",event.target.textContent);
    }
});
 
// // using appendChild
// const li1 = document.createElement("li");
// li1.textContent = "Login by (appendChild)";
// menuItem.appendChild(li1);

// // using append
// const li2 = document.createElement("li");
// li2.textContent = "Register by  (append)";
// menuItem.append(li2, " ← Text After Element");
const menu = document.getElementById("menu");

menu.addEventListener("click", function (event) {
    console.log("event.target:", event.target);
    console.log("event.currentTarget:", event.currentTarget);
});
