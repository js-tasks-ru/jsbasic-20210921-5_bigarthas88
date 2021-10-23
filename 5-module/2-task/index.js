function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const txt = document.querySelector('#text');
  btn.onclick = function(event) {
    txt.hidden = !txt.hidden;
  }
}
