'use strict';

/* Scroll Blocks */

let scrollBlocks = document.querySelectorAll('.scroll-block');
let scrollDotsElem;
let scrollDots = document.querySelector('#scroll-dots');
let header = document.querySelector('#header');

for(let i = 0, length = scrollBlocks.length; i < length; i++) {
	let scrollDot = document.createElement('div');
	scrollDot.className = 'scroll-dots__dot';
	scrollDots.append(scrollDot);
	if (i + 1 == scrollBlocks.length) {
		scrollDotsElem = document.querySelectorAll('.scroll-dots__dot');

		/* Active Dot */

		let bodyHeight = document.body.scrollHeight;
		let scroll = [];
		let max_scroll = [];
		let inScrollBlocks = false;

		function getScrollValues() {
			for(let i = 0, length = scrollDotsElem.length; i < length; i++) {
				scroll[i] = scrollBlocks[i].offsetTop;
				max_scroll[i] = scrollBlocks[i].offsetHeight + scroll[i];
			}
		}

		function getScrollPosition() {
			for(let i = 0, length = scrollDotsElem.length; i < length; i++) {
				if (pageYOffset >= scroll[i] && pageYOffset < max_scroll[i]) {
					scrollDotsElem[i].classList.add('active');
				} else {
					scrollDots.classList.remove('active');
					scrollDotsElem[i].classList.remove('active');
				}
			}

			for(let i = 0, length = scrollDotsElem.length; i < length; i++) {
				if (pageYOffset >= scroll[i] && pageYOffset < max_scroll[i]) {
					scrollDots.classList.add('active');
					break;
				} else {
					scrollDots.classList.remove('active');
				}
			}
		}

		getScrollValues();
		getScrollPosition();

		window.addEventListener('scroll', function(e) {
			if (document.body.scrollHeight == bodyHeight) {
				getScrollPosition();
			} else {
				bodyHeight = document.body.scrollHeight;
				getScrollValues();
				getScrollPosition();
			}
		});
	}
}