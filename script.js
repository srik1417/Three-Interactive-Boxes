document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', () => {
    // Close all other boxes
    document.querySelectorAll('.box').forEach(b => {
      if (b !== box) b.classList.remove('active');
    });

    // Toggle clicked box
    box.classList.toggle('active');
  });
});
