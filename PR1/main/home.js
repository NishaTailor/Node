import taskApi from "./api.js";

let id = -1
const handleSubmit = (e) => {
    e.preventDefault();
    let task = {
        name: document.getElementById('TaskNme').value,
        number: document.getElementById('Description').value,
        course: document.getElementById('Status').value
    }
    console.log(task)
    if (id == -1) {
        taskApi.post(task)
    }
    else {
        taskApi.patch(id, task)
    }
    window.location.reload()

}
document.getElementById("form").addEventListener("submit", handleSubmit)

const handleUpdate = (ele) => {
    document.getElementById('TaskName').value = ele.TaskName;
    document.getElementById('Description').value = ele.Description;
    document.getElementById('Status').value = ele.Status;
    document.getElementById('type').value = "update"
    id = ele.id;
}
// ui 
const uiMaker = (tasks) => {
    tasks.map((ele) => {
        let div = document.createElement("div");
        let TaskName = document.createElement("h1");
        TaskName.innerHTML = ele.TaskName;
        let Status = document.createElement("h2");
        Status.innerHTML = ele.Status
        let Description = document.createElement("h3");
        Description.innerHTML = ele.Description
        let btn1 = document.createElement("button");
        btn1.innerHTML = "Delete"
        let btn2 = document.createElement("button");
        btn2.innerHTML = "Update"
        btn2.addEventListener("click", () => handleUpdate(ele))
        btn1.addEventListener("click", () => {
            taskApi.delete(ele.id)
            window.location.reload()
        })
        div.append(TaskName, Status, Description, btn1, btn2)
        document.getElementById("list").append(div)
    })

}
const gettask = async () => {
    console.log(await taskApi.get())
    uiMaker(await taskApi.get())
}
gettask()