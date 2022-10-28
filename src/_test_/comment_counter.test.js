/**
 * @jest-environment jsdom
 */

 import commentCounter1 from '../modules/commentCounter';

 describe('Testing comment counter function', () => {
   document.body.innerHTML = `<div>
     <div div="comment-area"></div>
     <div class="new-comment"></div>
     <div class="new-comment"></div>
     <div class="new-comment"></div>
     <div class="new-comment"></div>
     <div class="new-comment"></div>
     </div>`
 
   const classCount = document.querySelectorAll('.new-comment');
   const parent = document.querySelector('#comment-area');
 
   commentCounter1(classCount, parent);
   
   it('function displays the correct number', () => {
     expect(parent.textContent).toBe('Total comments: 5');
   })
 });