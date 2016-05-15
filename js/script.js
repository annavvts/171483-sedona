var button = document.querySelector(".hotel-search");

var element = document.querySelector(".hotel-form");

button.addEventListener('click', function(){
  if (element.classList.contains("hotel-form-show")){
    element.classList.remove("hotel-form-show");
  } else {
    element.classList.add("hotel-form-show");
  }
});