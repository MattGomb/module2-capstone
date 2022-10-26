window.onload = function() {
  let comments = document.querySelectorAll('.comment');
  comments.forEach((comment) => {
    comment.addEventListener(('click'), () => {
      console.log('anyád');
      const home = document.getElementById('main-container');
      const popup = document.createElement('div');
      popup.innerHTML = `
      <div class="popupCard">
        <div class="left-side">
          <div class="popupPoke">
            <h3 class="name">placeholder name</h3>
            <div class="picDiv">
              <img src="" alt="this is a placeholder for an img">
            </div>
            <div class="intro">
              <p class="info">
              Type: whatever
              Height: whatever
              weight: tetű whatever
              </p>
            </div>
          </div>
        </div>
        <div class="comment-section">
          <h3>COMMENTS</h3>
          <div class="comment-area"></div>
          <div class="new-comments">
            <h3>Add a comment</h3>
            <input placeholder="your name">
            <input placeholder="your insights">
            <button type="submit">Comment</button>
          </div>
        </div>
      </div>
      `
      home.appendChild(popup);
    })
  })
}