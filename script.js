<script>
  document.querySelectorAll('.learn-more-btn').forEach(button => {
    button.addEventListener('click', () => {
      const moreContent = button.previousElementSibling;

      if (moreContent.classList.contains('show')) {
        moreContent.classList.remove('show');
        button.innerHTML = 'Learn more <i class="fa-solid fa-arrow-right"></i>';
      } else {
        moreContent.classList.add('show');
        button.innerHTML = 'Show less <i class="fa-solid fa-arrow-up"></i>';
      }
    });
  });
</script>