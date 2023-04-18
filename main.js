let rating;
let rating1 = document.getElementById("rating-1");
let rating2 = document.getElementById("rating-2");
let rating3 = document.getElementById("rating-3");
let rating4 = document.getElementById("rating-4");
let rating5 = document.getElementById("rating-5");
let submit = document.getElementById("submit");
rating1.addEventListener("click", () => {
  rating1.setAttribute("active", "true");
  rating2.setAttribute("active", "false");
  rating3.setAttribute("active", "false");
  rating4.setAttribute("active", "false");
  rating5.setAttribute("active", "false");

  rating = "1";
});
rating2.addEventListener("click", () => {
  rating2.setAttribute("active", "true");
  rating1.setAttribute("active", "false");
  rating3.setAttribute("active", "false");
  rating4.setAttribute("active", "false");
  rating5.setAttribute("active", "false");

  rating = "2";
});
rating3.addEventListener("click", () => {
  rating3.setAttribute("active", "true");
  rating2.setAttribute("active", "false");
  rating1.setAttribute("active", "false");
  rating4.setAttribute("active", "false");
  rating5.setAttribute("active", "false");

  rating = "3";
});
rating4.addEventListener("click", () => {
  rating4.setAttribute("active", "true");
  rating2.setAttribute("active", "false");
  rating3.setAttribute("active", "false");
  rating1.setAttribute("active", "false");
  rating5.setAttribute("active", "false");

  rating = "4";
});
rating5.addEventListener("click", () => {
  rating5.setAttribute("active", "true");
  rating2.setAttribute("active", "false");
  rating3.setAttribute("active", "false");
  rating4.setAttribute("active", "false");
  rating1.setAttribute("active", "false");

  rating = "1";
});
submit.addEventListener("click", () => {
  if (rating) {
    document.getElementById("rating-state").style.display = "none";
    document.getElementById("thank-you-state").style.display = "flex";
    document.getElementById(
      "selection-detail"
    ).innerHTML = `You selected ${rating} out of 5`;
  }
});
