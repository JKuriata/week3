// console.log(document)

// console.log(document.getElementById("listWrapper"))

// console.log(document.getElementsByTagName("p"[1]))

// const header = document.getElementById("heading");

// header.textContent = "New heading";
// header.style.border = "3px solid green";

// //text content would not do the same formatting as HTML like innerHTML which adds the list items, text content would actually print <li></li> with the script. So it should only really be used for changing text not formatting.

// const list = document.getElementById("listWrapper");

// list.innerHTML = "<li>New list item</li> <li>Second list element</li>";
// list.style.backgroundColor = "yellow";

// const listItems = document.getElementsByClassName("listItem");
// listItems[1].style.display= "none";

// Adding event listener -
// document.addEventListener(event,function)

// document.addEventListener("click", function() {console.log("You have clicked")})

// ---------------------
// const heading= document.getElementById("heading");
// const input = document.getElementById("inputBox");
// const submitBtn = document.getElementById("submit")

// submitBtn.addEventListener("click", () => {heading.textContent = input.value})

//Activity 1, making image vanish and reappear at the push of a button
const vanishBtn = document.getElementById("vanish");
const luciPic = document.getElementById("luciPic");

vanishBtn.addEventListener("click", () => {
    if (luciPic.style.display === "none") {
      luciPic.style.display = "block";
      vanishBtn.innerText = "Vanish";
    } else {
      luciPic.style.display = "none";
      vanishBtn.innerText = "Show";
    }
  });