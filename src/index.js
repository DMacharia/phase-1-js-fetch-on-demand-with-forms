const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.querySelector("#searchByID");

    if (input.value === "" || input.value === null) {
      alert("please fill in valid request");
    } else {
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
          const title = document.querySelector("#movieDetails h4");
          const summary = document.querySelector("#movieDetails p");

          title.innerHTML = data.title;
          summary.innerHTML = data.summary;
        });
    }
  });
};

document.addEventListener("DOMContentLoaded", init);
