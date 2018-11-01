const sheetURL = 'https://script.google.com/macros/s/AKfycbwZOVwfLxmd8oNRui0JrlQRPzhRSUc8uIaz9e0jROwlxNfX4biN/exec'

const form = $('#contact-form')

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
