const sheetURL = 'https://script.google.com/macros/s/AKfycbwdLNRRkzezw9rW83q57SpwFjltKpCYD4iYW1YT3z35Y7aeFkgc/exec'

const form = $('form#contact-form')

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
    method: "GET",
    dataType: "json",
    data:  form.serializeObject(),
    success: function() {
      form.trigger('reset')
      alert("Thank you very much for inquiring.")
    }
  })
})
