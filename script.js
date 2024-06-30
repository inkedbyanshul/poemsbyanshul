// Add event listeners to comment forms
document.querySelectorAll('.comment-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const commentInput = form.querySelector('input[type="text"]');
    const commentText = commentInput.value.trim();
    if (commentText !== '') {
      // Add comment to poem
      const poem = form.closest('.poem');
      const commentsContainer = poem.querySelector('.comments');
      const newComment = document.createElement('div');
      newComment.className = 'comment';
      newComment.textContent = commentText;
      commentsContainer.appendChild(newComment);
      // Update comment count
      const commentCount = poem.querySelector('.likes-comments span:nth-child(2)');
      const currentCount = parseInt(commentCount.textContent.split(' ')[0]);
      commentCount.textContent = `${currentCount + 1} comments`;
      // Clear input field
      commentInput.value = '';
    }
  });
});

// Add event listeners to like buttons
document.querySelectorAll('.likes-comments span:nth-child(1)').forEach(likeButton => {
  likeButton.addEventListener('click', event => {
    const poem = likeButton.closest('.poem');
    const likeCount = poem.querySelector('.likes-comments span:nth-child(1)');
    const currentCount = parseInt(likeCount.textContent.split(' ')[0]);
    likeCount.textContent = `${currentCount + 1} likes`;
  });
});
