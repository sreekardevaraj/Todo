const taskInput = document.getElementById("tastInput");
const taskList = document.getElementById("taskList");


function addTask() 
{
    const taskText = taskInput.value.trim(); 

    if (taskText !== "")  
    {
        const listItem = document.createElement("li");

        listItem.innerHTML = `               
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>  
        `

        taskList.appendChild(listItem);                  // to pass the values

        taskInput.value = "";
    }
}


function deleteTask(button) 
{
    const span  = button.parentElement;      
    taskList.removeChild(span);
}