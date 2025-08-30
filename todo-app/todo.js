let input = document.querySelector("#taskInput");
let btn = document.querySelector("#addBtn");
let ul = document.querySelector("#taskList");


let showTask = function(){
    let tasks = JSON.parse(localStorage.getItem("task")) || [];

    ul.innerHTML = "";

    tasks.forEach(function(task, index){

        let li = document.createElement("li");
        let dlt = document.createElement("button");
        dlt.classList.add("dlt-button");
        dlt.textContent = "DELETE"
        li.textContent = task;
        li.classList.add("li");

        dlt.addEventListener("click", function(){
            tasks.splice(index, 1);

            localStorage.setItem("task", JSON.stringify(tasks));

            showTask();
        });

        li.addEventListener("click", function(){
            li.classList.add("line-through");
        });

        ul.appendChild(li);
        li.appendChild(dlt);

    }) 

};


btn.addEventListener("click", function(){

    if (input.value.trim() === "") {
        return alert("Please enter a task!");
        
    };

    let oldTask = JSON.parse(localStorage.getItem("task")) || [];

    oldTask.push(input.value.trim());

    localStorage.setItem("task", JSON.stringify(oldTask));

    input.value = "";

    showTask();
})

showTask();