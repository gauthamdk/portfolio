const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
    }
  });
});

const skills = document.querySelector(".skills");

console.log(skills);
// observer.observe(document.querySelector(".skills"));
