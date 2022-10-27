const postComment = async (id, name, commentInput, date) => {
  if (name.length > 0 && commentInput.length > 0) {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/q43Np4AB1ka0fqpIWSXs/comments/',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            item_id: id,
            username: name,
            comment: commentInput,
            creation_date: date,
          },
        ),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }
};

export default postComment;