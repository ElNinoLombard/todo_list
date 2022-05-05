window.addEventListener('load', () =>{
    const form = document.querySelector('#task-form');
    const input = document.querySelector('#task-input');
    const list_elm = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); /* stops it from refreshing the page */

        const task = input.value;

        if (!task) {
            alert("Please fill out the task / Veuillez entrer une tâche");
            return;
        }

        const task_elm = document.createElement("div");
        task_elm.classList.add("task");

        const task_content_elm = document.createElement("div");
        task_content_elm.classList.add("content");

        task_elm.appendChild(task_content_elm);

        const task_input_elm = document.createElement("input");
        task_input_elm.classList.add("text");
        task_input_elm.type = "text";
        task_input_elm.value = task;
        task_input_elm.setAttribute("readonly", "readonly");

        task_content_elm.appendChild(task_input_elm);

        const task_actions_elm = document.createElement("div");
        task_actions_elm.classList.add("actions");

        const task_edit_elm = document.createElement("button");
        task_edit_elm.classList.add("edit");
        task_edit_elm.innerText = "Edit / Modifier";

        const task_delete_elm = document.createElement("button");
        task_delete_elm.classList.add("delete");
        task_delete_elm.innerText = "Delete / Supprimer";

        task_actions_elm.appendChild(task_edit_elm);
        task_actions_elm.appendChild(task_delete_elm);

        task_elm.appendChild(task_actions_elm);

        list_elm.appendChild(task_elm);

        input.value = "";

        task_edit_elm.addEventListener('click', () => {
            if (task_edit_elm.innerText == "Edit / Modifier") {
                task_input_elm.removeAttribute("readonly");
                task_input_elm.focus();
                task_edit_elm.innerText = "Save / Sauvegarder";
            } else {
                task_input_elm.setAttribute("readonly" , "readonly");
                task_edit_elm.innerText = "Edit / Modifier";
            }
        });

        task_delete_elm.addEventListener('click', () => {
            list_elm.removeChild(task_elm);
        });
    });
});
