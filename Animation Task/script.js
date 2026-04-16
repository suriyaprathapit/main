function sayHello() {
    alert("Hello from external JavaScript!");
}

  window.addEventListener('DOMContentLoaded', () => {
    const wall = document.getElementById('text-wall');
    const words = wall.textContent.trim().split(/\s+/);
    wall.innerHTML = words.map(word => `<span class="skill-word">${word}</span>`).join(' ');

    const skillWords = document.querySelectorAll('.skill-word');

    function randomShineMultiple(count = 4 + Math.floor(Math.random() * 3)) {
      const indices = new Set();
      while (indices.size < count) {
        const i = Math.floor(Math.random() * skillWords.length);
        indices.add(i);
      }

      indices.forEach(i => {
        const word = skillWords[i];
        word.classList.add('shine');
        setTimeout(() => word.classList.remove('shine'), 1200);
      });
    }

    setInterval(() => randomShineMultiple(), 400);
  });


function showContent(tabId, btn) {
    // 1. Hide all content boxes
    const boxes = document.querySelectorAll('.content-box');
    boxes.forEach(box => box.classList.remove('active'));

    // 2. Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.menu-btn');
    buttons.forEach(b => b.classList.remove('active'));

    // 3. Show the clicked tab and highlight button
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
  }

/*=============================================================*/
  

