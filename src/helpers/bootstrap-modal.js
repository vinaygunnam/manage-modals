$(document)
  .on('show.bs.modal', '.modal', function(event) {
    $(this).appendTo($('body'));
  })
  .on('shown.bs.modal', '.modal.in', function(event) {
    setModalsAndBackdropsOrder();
  })
  .on('hidden.bs.modal', '.modal', function(event) {
    setModalsAndBackdropsOrder();
  });

function setModalsAndBackdropsOrder() {
  var backdrop = $('.modal-backdrop.in');
  backdrop.addClass('hidden')
  var modalZIndex = 1040;
  $('.modal.in')
    .toArray()
    .sort((prev, next) => $(prev).data('order') > $(next).data('order') ? 1 : -1)
    .forEach(modal => {
      var $modal = $(modal);
      modalZIndex++;
      $modal.css('zIndex', modalZIndex);
      backdrop.removeClass('hidden').css('zIndex', modalZIndex - 1);
    });
}
