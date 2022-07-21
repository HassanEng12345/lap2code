const title = document.getElementById('Title');
const name = document.getElementById('name');
const story = document.getElementById('story');
const Btn = document.getElementById('publish');


function postNewData() {
  if (title.value === '' || name.value === '' || story.value === '') {
    alert(
      'Type something in'
    );
  }

  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title.value,
      name: name.value,
      body: story.value,
    }),
  });
}

Btn.addEventListener('click', (e) => {
  e.preventDefault();
  postNewData();
});