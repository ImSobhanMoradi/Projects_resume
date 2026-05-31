document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems, {});

  const addProjectBottun = document.getElementById("add_project_bottun");
  addProjectBottun.addEventListener("click", () => {
    document.querySelector(".add_project_modal").classList.add("show");
    document
      .querySelector(".add_project_modal_back")
      .classList.remove("dis-none");
  });

  document
    .querySelector(".add_project_modal_back")
    .addEventListener("click", (e) => {
      document.querySelector(".add_project_modal").classList.remove("show");
      e.target.classList.add("dis-none");
    });
});
