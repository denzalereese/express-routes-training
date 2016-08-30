console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');

 $('form').submit(function(event) {
    //event.preventDefault();
    $.ajax({
      url: "http://localhost:3000/pick-a-number/24",
      method: "GET",
      success: onSuccess,
      error: onError
    })
  });
});

function onSuccess(result) {
  console.log(result);
}

function onError() {
  console.log('Damn.');
}
