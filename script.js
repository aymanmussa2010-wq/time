function addTask() {

    let task = document.getElementById("taskInput").value;
    let time = document.getElementById("timeInput").value;

    if (task === "") {
        alert("اكتب مهمة أولاً");
        return;
    }

    if (time === "") {
        alert("اكتب وقت المهمة");
        return;
    }

    let newTask = document.createElement("p");

    newTask.innerText = task + " - " + time + " دقيقة";

    newTask.onclick = function() {
        newTask.style.textDecoration = "line-through";
        newTask.style.opacity = "0.5";
    };

    let deleteButton = document.createElement("button");

    deleteButton.innerText = "🗑️";

    deleteButton.onclick = function(event) {
    event.stopPropagation();
    newTask.remove();

    let totalTime = 0;

    document.querySelectorAll("#taskList p").forEach(function(task) {
        let text = task.innerText;
        let minutes = parseInt(text.match(/\d+/)[0]);
        totalTime += minutes;
    });

    document.getElementById("totalTime").innerText =
        "⏱️ مجموع الوقت: " + totalTime + " دقيقة";
};

    newTask.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(newTask);
let totalTime = 0;

document.querySelectorAll("#taskList p").forEach(function(task) {
    let text = task.innerText;
    let minutes = parseInt(text.match(/\d+/)[0]);
    totalTime += minutes;
});

document.getElementById("totalTime").innerText =
    "⏱️ مجموع الوقت: " + totalTime + " دقيقة";
    document.getElementById("taskInput").value = "";
    document.getElementById("timeInput").value = "";
}