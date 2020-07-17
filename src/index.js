import './styles/style.scss';

$(function() {
  $('.cell').each(function() {
    $(this).attr('data-class', '.' + $(this).attr('class').replace(/ /g, '.'));
  });
});
