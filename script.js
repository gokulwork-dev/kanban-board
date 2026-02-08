const todo = document.querySelector("#todo");
const progress = document.querySelector("#Progress");
const done = document.querySelector("#done");
let dragElement = null

const tasks= document.querySelectorAll('.task');

tasks.forEach(task=>{
    task.addEventListener("drag",(e) =>{
        dragElement = task;
    })
})

// progress.addEventListener("dragenter", (e) =>{
//     progress.classList.add("hover-over");
// })
// progress.addEventListener("dragleave",(e) =>{
//     progress.classList.remove("hover-over");
// })

// todo.addEventListener("dragenter", (e) =>{
//     todo.classList.add("hover-over");
// })
// todo.addEventListener("dragleave",(e) =>{
//     todo.classList.remove("hover-over");
// })
// done.addEventListener("dragenter", (e) =>{
//     done.classList.add("hover-over");
// })
// done.addEventListener("dragleave",(e) =>{
//     done.classList.remove("hover-over");
// })

function addDragEventsOnColumn(column){
    column.addEventListener("dragenter",(e)=>{
        e.preventDefault();
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave",(e)=>{
        e.preventDefault();
        column.classList.remove("hover-over");
    })
    column.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })
    column.addEventListener("drop",(e) =>{
        e.preventDefault();

        column.appendChild(dragElement);
        column.classList.remove("hover-over");
    })
}
addDragEventsOnColumn(todo)
addDragEventsOnColumn(progress)
addDragEventsOnColumn(done)

const toggleModalButton = document.querySelector("#toggle-modal")
const modalBg = document.querySelector(".modal .bg")
const modal = document.querySelector(".modal")

toggleModalButton.addEventListener("click",()=>{
    modal.classList.toggle("active");
})
modalBg.addEventListener("click",()=>{
    modal.classList.remove("active")
})