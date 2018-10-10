$(document).ready(function() {
$('.nav-trigger').click(function() {
$('.side-nav').toggleClass('visible');
});
});
// If user clicks anywhere outside of the modal, Modal will close
var modal = document.getElementById('modal-wrapper');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}