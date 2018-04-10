// MAD MEN

var bodyHeight = document.documentElement.offsetHeight

var items = document.querySelectorAll('.item')

window.addEventListener( 'scroll', function() {

	var scrollProgress = window.scrollY / ( bodyHeight - window.innerHeight )

		for (var i = 0; i < items.length; i++) {

			var minPercentage = i * (1 / items.length)
			var maxPercentage = (i + 1) * (1 / items.length)

			if (scrollProgress > minPercentage && scrollProgress < maxPercentage) {

				var scaleValue = scrollProgress.map(minPercentage, maxPercentage, 0, 1)

				items[i].style.transform = 'scale(' + scaleValue + ')'

				if (!items[i].classList.contains('is-visible')) {

					items[i].classList.add('is-visible')

				}

			} else if (scrollProgress < minPercentage + 0.1) {

				items[i].style.transform = 'scale(0)'

				if (items[i].classList.contains('is-visible')) {

					items[i].classList.remove('is-visible')

				}

			} else if (scrollProgress > maxPercentage - 0.1) {

				items[i].style.transform = 'scale(1)'

				if (items[i].classList.contains('is-visible')) {

					items[i].classList.remove('is-visible')

				}

			}

		}

})

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}



// var outer = document.querySelector('.outer')
// var image = document.querySelector('.image')
//
// outer.addEventListener('scroll', function(event) {
// 	console.log(outer.scrollTop)
// 	image.style.transform = 'scale(' + outer.scrollTop / 10 + ')'
// })

/////////////////

// function openModal() {
//   document.getElementById('myModal').style.display = "block";
// }
//
// function closeModal() {
//   document.getElementById('myModal').style.display = "none";
// }
//
// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }
