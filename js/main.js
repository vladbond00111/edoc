
var signInput = $('#sign-input');
var sign1 = $("#sign1");
var sign2 = $("#sign2");
var sign3 = $("#sign3");
var sign4 = $("#sign4");
var sign5 = $("#sign5");
var sign6 = $("#sign6");



document.addEventListener('keyup', () => {
  sign1.html(signInput.val())
  sign2.html(signInput.val())
  sign3.html(signInput.val())
  sign4.html(signInput.val())
  sign5.html(signInput.val())
  sign6.html(signInput.val())
});

