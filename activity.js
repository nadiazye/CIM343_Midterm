// 1. Card click-to-expand: toggles the .open class defined in styles.css
document.querySelectorAll('.planet-card').forEach(function (card) {
    card.addEventListener('click', function () {
      card.classList.toggle('open');
    });
  });
  
  // 2. Weight calculator: TODO
  //    Read #weight and #planet-select, multiply them, show text in #calc-result.
  
  // 3. Random fact button: TODO
  //    Make an array of facts, pick one at random on #fact-btn click,
  //    and put it in #random-fact.