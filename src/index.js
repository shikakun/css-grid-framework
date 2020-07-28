import './styles/style.scss';

$(function() {
  $('.column').each(function() {
    const $this = $(this);
    $this.attr('data-class', '.' + $(this).attr('class').replace(/ /g, '.'))

    if (!$this.hasClass('document-hidden-label')) {
      $this.append('<span class="content-area"></span>');
    }
  });
});
