//The title must not be empty and ,must not exceed 12 character
//The descrioption must not be empty and ,must not exceed 20 character
//Display appropriate Validation warnings
//When you click on the check icon, crossing the title and description || make the font colour gray
//Delete/trash icon must delete a task from the table
//Increase/decrease the task count anytime it changes in value and display it

let form = document.getElementById('taks_form');
let saveBtn = document.getElementById('save_btn');
let title = document.getElementById('title');
let description = document.getElementById('description');
let titleWrapper = document.getElementById('titleWrapper');
let descrWrapper = document.getElementById('descWrapper');
let counter = document.getElementById('cart');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate() == true){
    let titleInput = e.target.title.value;
    let descInput = e.target.description.value;
    setTask({titleInput, descInput});
  }
});

function setTask(task) {
  let table = document.getElementById("task_table").tBodies;
  let len = table[0].rows.length;
 let tr = `
 <tr>
 <th scope="row">${ len + 1 }</th>
 <td>${ task.titleInput }</td>
 <td>${ task.descInput }</td>
 <td>
   <div class="actions d-flex justify-content-between">
     <i class="fas fa-trash text-danger mx-2"></i>
     <i class="fas fa-check text-success mx-2"></i>
   </div>
 </td>
</tr>
 `;
 table[0].innerHTML += tr;
 counter.innerText = len + 1;

}

function validate () {
  if (title.value == "" || title.value.length > 12) {
    setError( titleWrapper, "Task title is required.");
    return false;
  }else if (description.value == "" || description.value.length > 20) {
    setError( descrWrapper, "Description cannot exceed 20 characters");
    return false;
  }else {
    setSuccess( titleWrapper, "Looks good ✅");
    setSuccess( descrWrapper, "Looks good ✅");
    return true;
  }

}

function removeError (node) {
  let error = document.getElementsByTagName('small');
  if(error.length > 0){
    node.removeChild(error[0]);
  }
}
function setError (node, message) {
  let error = document.getElementsByTagName('small');
  let small = document.createElement('small');
  if(error.length == 0 || error.length == 1){
    small.innerText = message;
    small.style.color = 'tomato';
    node.appendChild(small);
    return true;
  }else{
    setSuccess( node, "Looks good ✅");
  }
}

function setSuccess (node, message) {
  let error = document.getElementsByTagName('small');
  let small = document.createElement('small');
  if(error.length == 0 || error.length == 1){
    small.innerText = message;
    small.style.color = 'green';
    node.appendChild(small);
    return true;
  }
  small.innerText = "";
}