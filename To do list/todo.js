const task = () => {
  let taskNew = document.createElement("div");
  let taskContent = document.querySelector("#input").value;
  let parent = document.querySelector("#parent");
  if (taskContent != "") {
    taskNew.append(taskContent);
    parent.append(taskNew);
    taskNew.classList.add("item");
    document.querySelector("#input").value = "";
    taskNew.setAttribute("onclick", "this.remove()");
  }
};
