document.addEventListener("DOMContentLoaded", function () {
    const taskTitle = document.getElementById("taskTitle");
    const taskDescription = document.getElementById("taskDescription");
    const addTaskButton = document.getElementById("addTask");
    const taskTable = document.getElementById("taskTable");
    const errorText = document.getElementById("errorText");

    addTaskButton.addEventListener("click", function () {
        const titleText = taskTitle.value.trim();
        if (titleText !== "") {
            const descriptionText = taskDescription.value.trim();
            const tableRow = document.createElement("div");
            tableRow.classList.add("table-row");

            tableRow.innerHTML = `
                <div class="table-cell">${titleText}</div>
                <div class="table-cell">${descriptionText}</div>
                <div class="table-cell">
                    <button class="delete-button">Delete</button>
                </div>
            `;

            const deleteButton = tableRow.querySelector(".delete-button");

            deleteButton.addEventListener("click", function () {
                taskTable.removeChild(tableRow);
            });

            taskTable.appendChild(tableRow);
            taskTitle.value = "";
            taskDescription.value = "";
            errorText.style.display = "none";
        } else {
            errorText.style.display = "block";
        }
    });
});
