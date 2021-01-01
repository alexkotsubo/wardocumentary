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
					if (i == 0) {
						scrollDots.classList.add('blue');
					} else {
						scrollDots.classList.remove('blue');
					}
				} else {
					scrollDots.classList.remove('active');
					scrollDotsElem[i].classList.remove('active');
				}
			}

			for(let i = 0, length = scrollDotsElem.length; i < length; i++) {
				if (pageYOffset >= scroll[i] && pageYOffset < max_scroll[i]) {
					scrollDots.classList.add('active');
					if (i == 0) {
						scrollDots.classList.add('blue');
					} else {
						scrollDots.classList.remove('blue');
					}
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

/* Text */

let scrollParagraph = document.querySelectorAll('.scroll-block__paragraph');
let scrollBtn = document.querySelectorAll('.scroll-block__btn');

document.addEventListener("DOMContentLoaded", function(e) {
	for(let i = 0, length = scrollParagraph.length; i < length; i++) {
		let scrollParagraphHeight = scrollParagraph[i].offsetHeight;
		let tapScroll = false;
		scrollParagraph[i].style.height = '0px';

		scrollBtn[i].addEventListener('click', function(e) {
			if (tapScroll) {
				scrollParagraph[i].style.height = '0px';
				tapScroll = false;
			} else {
				scrollParagraph[i].style.height = scrollParagraphHeight + 'px';
				tapScroll = true;
			}
		});
	}
});