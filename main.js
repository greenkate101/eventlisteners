var button = document.querySelector('button');
var navMenu = document.querySelector('.nav-menu');

button.textContent = 'hide nav'

button.addEventListener('click', function () {
   	navMenu.classList.toggle('nav-menu-hidden');
   		if (button.textContent === 'show nav') {
   			button.textContent = 'hide nav'
   		} else {   
   			button.textContent = 'show nav';		
   		}
   	});	


var ginput = document.querySelector('#guest');
var list = document.querySelector('.guest-list');


ginput.addEventListener('keyup', function (event) {	
	if (event.keyCode === 13) {
	 var li = document.createElement('li');
	li.textContent = ginput.value;
	list.appendChild(li);
	ginput.value = '';
	li.classList.add('guest');
	}
	
});


var workinput = document.querySelector('#work');
var list3 = document.querySelector('#guest-two');


workinput.addEventListener('keyup', function (event) {	
	if (event.keyCode === 13) {
	 	var li3 = document.createElement('li');
	 	var button = document.createElement("button");
	 	button.textContent = 'X';
		li3.textContent = workinput.value;
		list3.appendChild(li3);
		li3.appendChild(button);
		workinput.value = '';
		li3.classList.add('guest');
		li3.addEventListener ('click', function () {
			li3.parentElement.removeChild(li3);
		});
	}
	
});

