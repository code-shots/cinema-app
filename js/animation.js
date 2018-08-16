document.addEventListener('DOMContentLoaded', () => {
	let startBtn = document.querySelector('.start-btn');
	let startPage = document.querySelector('.start');

	startBtn.addEventListener('click', () => {
		startPage.classList.add('hide-start');
		animateView();
	})

	function animateView() {
		anime({
			targets: 'header',
			scale: [0, 1],
			opacity: [0, 1],
			easing: 'easeOutExpo',
		})

		anime({
			targets: '.title-wrapper h1',
			translateX: [-100, 0],
			opacity: [0, 1],
			easing: 'easeOutExpo',
			delay: 200,
		})

		anime({
			targets: '.rating svg',
			easing: 'easeOutExpo',
			translateY: [-10, 0],
			opacity: [0, 1],
			delay: (el, i) => {
				return 300 + 100 * i;
			},
		})

		anime({
			targets: '.back-wrapper',
			easing: 'easeOutExpo',
			translateX: [50, 0],
			delay: 200,
			opacity: [0, 1],
		})

		anime({
			targets: '.play-btn',
			easing: 'easeOutExpo',
			scale: [2, 1],
			opacity: [0, 1],
			delay: 700,
		})

		anime({
			targets: '.play-btn svg',
			easing: 'easeOutExpo',
			scale: [0.3, 1],
			rotate: '1turn',
			opacity: [0, 1],
			delay: 800,
		})

		let contentTimeline = anime.timeline({
			easing: 'easeOutExpo',

		});

		contentTimeline
			.add({
				targets: '.detail span',
				translateY: [-40, 0],
				opacity: [0, 1],
				delay: (el, i) => 50 * i,
			})


		anime({
			targets: '.gallery img',
			translateX: [-50, 0],
			easing: 'easeOutExpo',
			opacity: [0, 1],
			delay: (el, i) => 300 + 100 * i,
		})

		anime({
			targets: '.inf-wrapper span, .inf-wrapper p',
			translateX: [-50, 0],
			easing: 'easeOutExpo',
			duration: 700,
			delay: (el, i) => 200 + 150 * i,
			opacity: [0, 1],
		})

		anime({
			targets: '.buy-btn',
			translateY: [100, 0],
			delay: 200,
			duration: 1200,
		})
	}
})
