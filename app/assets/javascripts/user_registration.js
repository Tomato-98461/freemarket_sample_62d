$(function(){

  $('#check').change(function(){
    if($(this).prop('checked')){
      $('#user_password').attr('type','text');
    } else {
      $('#user_password').attr('type','password');

    }
  });
});
