const title = document.getElementById("Title");
const myName = document.getElementById("name");
const story = document.getElementById("story");
const Btn = document.getElementById("publish");
const myForm = document.querySelector("#myForm");

function postNewData(e) {
    e.preventDefault();
    if (title.value === "" || myName.value === "" || story.value === "") {
        alert("Type something in");
    }

    fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title.value,
            pseudonym: myName.value,
            body: story.value,
        }),
    });
}

myForm.addEventListener("submit", postNewData);
