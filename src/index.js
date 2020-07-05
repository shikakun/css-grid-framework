import './styles/style.scss';

$(function() {
  $('.column').each(function() {
    $(this).attr('data-class', '.' + $(this).attr('class').replace(/ /g, '.'));
  });
});
