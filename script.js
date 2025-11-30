// Note /
const taskinput = 
document.getElementById("taskinput");
const addtask =
document.getElementById("addtask");
const tasklist =
document.getElementById("tasklist")

//button clicks /
addtask.addEventListener("click", function () {

    const task = taskinput.value.trim();

    if (task === "" ) return; //stop if empty

    const li = document.createElement("li");
    li.textContent = task;

    //Delete Button /
    const deleteBtn = 
    document.createElement("button");
    deleteBtn.textContent = "Delete";

    //Delete task /
    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    //Adding delete button to list item /
    li.appendChild(deleteBtn);

    //Adding list item to ul /
    tasklist.appendChild(li);

    //Clearring input /
    taskinput.value = "";

});

//Adding task once button is clicked /
    taskinput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addtask.click();
       }
    });
