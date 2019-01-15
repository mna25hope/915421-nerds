	var link = document.querySelector(".button-write");
	
	var popup = document.querySelector(".modal-write");
	var close = popup.querySelector(".modal-close");
	
	var form = popup.querySelector(".feedback");
	var name = popup.querySelector("[name=name]");
	var mail = popup.querySelector("[name=mail]");
	
	
	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
		popup.classList.remove("modal-write");
		name.focus();
   });
  
	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.add("modal-write");
		popup.classList.remove("modal-error");
  });
	
	form.addEventListener("submit", function (evt) {
    if (!name.value || !mail.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
		} 
  });
  
	window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
      }
    }
  });
