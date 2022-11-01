/*
    File name : app.js
    Name : Jiho Choi
    Student Number : 301183378
    Date : October 31, 2022
*/
(function () {
    function Start() {
      console.log("App Started...");

      let deletebuttons = document.querySelectorAll(".btn-danger");

      for (button of deletebuttons) {
        button.addEventListener("click", (event) => {
          if (!confirm("Are you sure")) {
            event.preventDefault();
            window.location.assign("/contact-list");
          }
        });
      }
      
    }
    window.addEventListener("load", Start);
  })();
  