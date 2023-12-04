const petNames = ["cheeto", "biscuit", "bear", "finn", "bo", "oreo", "cooky"];
const sections = document.querySelectorAll("main section");

petNames.forEach((petName, index) => {
  const petElement = document.getElementById(petName);
  sections[index + 1].addEventListener("click", () => {
    petElement.scrollIntoView({ behavior: "smooth" });
  });
});
