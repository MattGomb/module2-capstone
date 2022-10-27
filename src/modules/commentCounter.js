const commentCounter = (count, append) => {
  const counter = count.length;
  const counterText = document.createElement('p');
  counterText.setAttribute('id', 'counter');
  counterText.textContent = `Total comments: ${counter}`;
  append.appendChild(counterText);
};

export default commentCounter(); 