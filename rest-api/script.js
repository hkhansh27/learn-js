let courseApi = "http://localhost:3000/courses";
let inputName = document.querySelector("input[name=name]");
let inputDes = document.querySelector("input[name=description]");
const start = () => {
  getCourses(renderCourses);
  hanldeCreateCourses();
};
start();
//create
function createCourses(data, callback) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(courseApi, options)
    .then((response) => response.json())
    .then(callback);
}
function hanldeCreateCourses() {
  let createButton = document.querySelector("#create-form button");
  createButton.onclick = () => {
    let data = {
      name: inputName.value,
      description: inputDes.value,
    };
    createCourses(data, () => getCourses(renderCourses));
  };
}

//read
function getCourses(callback) {
  fetch(courseApi)
    .then((response) => response.json())
    .then(callback);
}
//update
function handleUpdateCourse(id) {
  //fill in  the form
  let h4 = document.querySelector(`.course-item-${id} h4`);
  let p = document.querySelector(`.course-item-${id} p`);
  let nameValue = (inputName.value = h4.innerHTML);
  let desValue = (inputDes.value = p.innerHTML);
  //track change
  inputName.onchange = () => (nameValue = inputName.value);
  inputDes.onchange = () => (desValue = inputDes.value);
  // create a new btn after clicking update button
  let btn = document.createElement("button");
  btn.setAttribute("class", "updateButton");
  btn.innerText = "Confirm to update";
  document.querySelector(`.course-item-${id}`).appendChild(btn);
  //update after clicking "Confirm to update" button
  document.querySelector(`.course-item-${id} .updateButton`).onclick = () => {
    let data = {
      name: nameValue,
      description: desValue,
    };
    console.log(data);
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(courseApi + "/" + id, options)
      .then((response) => response.json())
      .then(() => getCourses(renderCourses));
  };
}

//delete
function handleDeleteCourse(id) {
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseApi + "/" + id, options)
    .then((response) => response.json())
    .then(() => {
      let itemDelete = document.querySelector(".course-item-" + id);
      if (itemDelete) itemDelete.remove();
    });
}
function renderCourses(courses) {
  let listCourses = document.querySelector("#list-courses");
  let htmls = courses.map((course) => {
    return `<li class="course-item-${course.id}">
      <h4>${course.name}</h4>
      <p>${course.description}</p>
      <button onclick="handleDeleteCourse(${course.id})">Delete</button>
      <button onclick="handleUpdateCourse(${course.id})">Update</button>
    </li>`;
  });
  listCourses.innerHTML = htmls.join("");
}
