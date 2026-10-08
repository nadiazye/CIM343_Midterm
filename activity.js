// 1. Card click-to-expand: toggles the .open class defined in styles.css
document.querySelectorAll('.planet-card').forEach(function (card) {
  card.addEventListener('click', function () {
    card.classList.toggle('flipped');
  });

  // ADA Compliance ? To help users be able to naviagte using keyboard
  card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('flipped');
    }
    });
  });

// 2. Weight calculator
  const weightInput = document.getElementById('weight');
  const planetSelect = document.getElementById('planet-select');
  const calcBtn = document.getElementById('calc-btn');
  const calcResult = document.getElementById('calc-result');

  function calculateWeight() {
  const userWeight = Number(weightInput.value)
  const planetWeight = Number(planetSelect.value)

  if (!userWeight || userWeight <= 0) {
    calcResult.textContent = "Please enter a number above 0.";
    return;
  }

  const newWeight = (userWeight * planetWeight).toFixed(1);
  const planetName = planetSelect.options[planetSelect.selectedIndex].text;

  calcResult.textContent = "On " + planetName + " you would weigh " + newWeight + " lbs.";
}

// Run calculateWeight when the button is clicked
  calcBtn.addEventListener('click', calculateWeight);

  weightInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      calculateWeight();
    }
  });
  
// ----------------------------------------Fun Fact Button/ The Facts ----------------------------------------------------
  const factBtn = document.getElementById("fact-btn");
  const factBox = document.getElementById("random-fact");

  const facts = [
    "The International Space Station is the third brightest object in the sky after the Sun and the Moon.",
    "Due to the effects of time dilation, if you had a spacecraft that could continuously accelerate at 1G indefinitely, you could cross the entire Milky Way in about 12 years despite traveling about 100,000 light years.",
    "The average distance between asteroids in the asteroid belt is twice the distance between the Earth and Moon. You could fly through the asteroid belt while texting or even taking a nap without fear of hitting anything. Think about that next time a movie shows flying through an asteroid belt.",
    "Space is only 62 miles up.",
    "The Sun's 230 million year orbit around the galactic center is wavy, going up above and down below the galactic plane. The Sun is currently 55 years above the galactic plane.",
    "The sun accounts for 99% of the total mass in our solar system.",
    "There is a planet that is practically a flaming ball of ice. It is so close to it's star that it's atmosphere is constantly on fire and the planets gravity is so strong that the surface is ice because any water or vapour is compressed into its solid state from the pressure. ",
    "While in space, flatulence (farting) will NOT propel you around the shuttle.",
    "To turn Earth into a black hole, you will need to compress it to the size of a marble.",
    "Saturn has the lowest density of all the planets in the Solar System. It is actually less dense than water; if you had a large enough pool of water, Saturn would float.",
    "Space has a smell. Different astronauts have described it as smelling like gunpowder, burnt almond cookies, pleasantly metallic, welding, and even steak, however the majority of the universe will probably smell like rotten eggs due to the amount of ammonia and sulfer.",
    "There's more oxygen IN the moon than in our atmosphere."
  ];

  factBtn.addEventListener("click", function () {

    // picks a random number from 0 up to the last position in the facts list
    const randomIndex = Math.floor(Math.random() * facts.length);

    // puts a random fact inside the empty box
    factBox.innerHTML = "<strong>Fun Fact:</strong> " + facts[randomIndex];

    // CSS ALTERATION: this changes the text from "Press the button for random fact." to the actual fact
    factBox.style.display = "block";

    factBox.classList.add("random-fact");

    // change button text
    factBtn.innerHTML = "Show Another Fact";
});