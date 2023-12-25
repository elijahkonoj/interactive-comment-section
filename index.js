let deleteBtn = document.querySelector(".delete");
let overlayMessage = document.getElementById("overlay");
let cancelButton = document.getElementById("cancel-btn");
let addBtn = document.querySelector(".add");
let minusBtn = document.querySelector(".minus");
let spanNum = document.getElementById("span-num");
let repLink = document.getElementById("rep-link")
let replyOverlay = document.getElementById("reply-overlay")
let editLink = document.querySelector(".edit")
let editPara = document.getElementById("edit-para");



let x = 0;

deleteBtn.addEventListener('click', () => {
    overlayMessage.style.display = 'block'
})

cancelButton.addEventListener("click", () => {
    overlayMessage.style.display = 'none';
})

addBtn.addEventListener("click", () => {
    
        const y = x++;
     spanNum.innerHTML = y;
     
    console.log("clicked")
    
    
})

minusBtn.addEventListener("click", () => {

        const y = x--;
     spanNum.innerHTML = y;
    console.log("clicked") 
})

repLink.addEventListener("click", () => {
    replyOverlay.style.display = 'block';
    console.log("clicked")
})

editLink.addEventListener("click", () =>{
    editPara.style.border = '1px solid black';
    editPara.style.padding = '10px'
    editPara.style.marginTop = '5px'
    editPara.style.borderRadius = '5px'
    editPara.focus();
})