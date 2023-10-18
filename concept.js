//faq codes
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})


const container = document.querySelector(".lottie-container");

// Load the Lottie animation from the provided URL
lottie.loadAnimation({
  container: container, // Specify the container element
  renderer: "svg", // Choose the renderer (svg, canvas, html)
  loop: true, // Set animation loop
  autoplay: true, //  play automatically
  path:"https://lottie.host/faad4cff-a8da-4258-9591-23495046b3d6/KgQhWhyzoP.json",
//   path: "https://lottie.host/2595c90d-3cb9-469e-bb9f-1395780129e4/FCyy7xrA48.json", // Provide the URL of the animation JSON
});
