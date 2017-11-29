// JavaScript source code

/*
 $("input#login").blur(loginvalidate)
 //$("input#email").blur(validateEmpty)
 $("input#email").blur(emailValidate)
 $("input#pass").blur(passlValidate)
 $("input#repeatpass").blur(repeatPasslValidate)
 
 var correct = false;

 function loginvalidate () {

	var login = $.trim( $( "input#login" ).val());
	var lengthLn = login.length;
	var elememtP = $("#login").next();
	var LnMinLimit = 3;
	correct = false;
 	if (lengthLn == "") {
		 $(elememtP).text("введены пробелы или пустое поле");

 	} else if (lengthLn < LnMinLimit ) {
		$(elememtP).text("Имя должно быть не менее 3 символов");
	} else {
		$(elememtP).text("");
		correct = true;
	};
 };

 function emailValidate () {

	var reg = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
	var email = $( "input#email" ).val();
	var emailvalid = email.match(reg);
	var elememtP = $("#email").next();

	if (emailvalid == "") {
		$(elememtP).text("поле не должно быть пустым");
	} else if (emailvalid === null ) {
		$(elememtP).text('заполните в формате "username@mpl.com"');
	} else {
		$(elememtP).text("");
	};
	
 };

function passlValidate () {

	var pass = $( "input#pass" ).val();
	var lengthPass = pass.length;
	var elememtP = $("#pass").next();
	var passMinLimit = 6;

 	if (lengthPass == "") {
		 $(elememtP).text("Поле не должно быть пустым");
 	} else if (lengthPass < passMinLimit ) {
		$(elememtP).text("Пароль должен содержать не менее 6 символов");
	} else  {
		$(elememtP).text("");
	};
};

function repeatPasslValidate () {
	var pass = $( "input#pass" ).val();
	var repeatpass = $( "input#repeatpass" ).val();
	var elememtP = $("#repeatpass").next()

	if (pass != repeatpass ) {
		$(elememtP).text("Пароли не совпадают");
	} else  {
		$(elememtP).text("");
	};
};




function validateEmpty (){
	$("input.form-control").each(function() {
 		var obj = $(this).parent();
		if ($.trim($(this).val()) == "") {
			$(obj).attr("class", "form-group has-error");
	


		} else { 
			$(obj).attr("class", "form-group has-success"); 

			console.log("success");
		};
	});
};
/*
 if (pass == repeatpass ) {
$($("#login").next()").text("пробелы или пустое поле")
$("#login").text("пробелы или пустое поле")
console.log($(this).val());
$("div.form-group").attr("class", "form-group has-error");
$("form-control").prev("form-group");
$("login").parent();
$("input.form-control").parent();
var login = $.trim($( "input#login" ).val());
$('div.form-group').append('<p class="help-block">Ошибка</p>');
$('input.form-control').after('<p class="help-block">Ошибка</p>')
$('input.form-control').toggle();
$('.help-block').hide();
$.trim(login); 
*/