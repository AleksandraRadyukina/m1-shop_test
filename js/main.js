const modalButton = $('[data-toggle="popup"]');
const closeModalButton = $(".popup__close");
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal)

function openModal() {
  const popupOverlay = $(".popup__overlay");
  const popupDialog = $(".popup__dialog");
  popupOverlay.addClass("popup__overlay--visible");
  popupDialog.addClass("popup__dialog--visible");
}
function closeModal(event) {
  event.preventDefault();
  const popupOverlay = $(".popup__overlay");
  const popupDialog = $(".popup__dialog");
  popupOverlay.removeClass("popup__overlay--visible");
  popupDialog.removeClass("popup__dialog--visible");
}


$(".form").each(function() {
  $(".popup__phone").mask("+7 (000) 000-0000");
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "The name must be at least two letters",
      },
      phone: {
        required: "Please enter your phone number",
        minlength: "please enter 10 digits",
      },
      },
    });
})
