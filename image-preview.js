var modal = document.getElementsByClassName("carousel-modal")[0];

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll(".carousel-container img");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementsByClassName("modal-caption")[0];
images.forEach(img => {
	img.onclick = function(){
	  modal.style.display = "flex";
	  modalImg.src = this.src;
	  captionText.display = !!this.alt ? "": "hidden";
	  captionText.innerHTML = this.alt;
	}
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}