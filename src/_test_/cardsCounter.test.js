/* eslint-disable linebreak-style */
/**
 * @jest-environment jsdom
 */

import cardsNumber from '../modules/cardsCounter';
//import reservationCounter from '../modules/reservation_counter.js';

test('Add a new title with the number of reservations to one div', () => {
  document.body.innerHTML =
   '<h1 id="title"></h1>'
    + '  <div class="PokeCard"></div>'
    + '  <div class="PokeCard"></div>'
    + '  <div class="PokeCard"></div>';

  const cardsResult = document.getElementById('title');

  cardsNumber('PokeCard');
  expect(cardsResult.textContent).toBe('PokeCodex (3)');
});
