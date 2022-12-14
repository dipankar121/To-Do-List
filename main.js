window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); //prevent the page from refreshing
    const inputTask = input.value;
    if (inputTask == "") {
      alert("Please input task");
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    list_el.appendChild(task_el);

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = inputTask;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    task_el.appendChild(task_actions_el);

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerText = "Edit";

    task_actions_el.appendChild(task_edit_el);

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerText = "Delete";

    task_actions_el.appendChild(task_delete_el);

    input.value = "";

    //EDIT BUTTON
    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Save";
      } else {
        //SAVE BUTTON
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Edit";
      }
    });

    //DELETE BUTTON
    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
