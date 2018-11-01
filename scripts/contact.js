// google sheet
// https://docs.google.com/spreadsheets/d/1fNq4jiIlJeEhN3NsnSAM8CEPUzEpxGHHOyl1IJpHHUo/edit#gid=0
const sheetURL = 'https://script.google.com/macros/s/AKfycbx_JApnE0GiZ3cWIkQWHOsrmg0oeeeJ-ImHZ2xxUGe-QdFje1bT/exec'

const form = $('.form')

$.fn.serializeObject = function()
{
 var o = {};
 var a = this.serializeArray();
 $.each(a, function() {
 if (o[this.name]) {
 if (!o[this.name].push) {
 o[this.name] = [o[this.name]];
 }
 o[this.name].push(this.value || '');
 } else {
 o[this.name] = this.value ||'';
 }
 });
 return o;
};


$('.contact-button').on('click', function(e) {
  e.preventDefault()
  $.ajax({
    url: sheetURL,
    method: 'GET',
    dataType: 'json',
    data:  form.serializeObject(),
    success: function() {
      form.trigger('reset')
    }
  })
})
