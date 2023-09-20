const postCommentsHandler = {}

postCommentsHandler.getAllPostComment = async (req, res) => {
  const apiUrl = {
    post: "https://jsonplaceholder.typicode.com/posts",
    comment: "https://jsonplaceholder.typicode.com/comments",
  };

  const postResponse = await fetch(apiUrl.post);
  const commentResponse = await fetch(apiUrl.comment);

  const posts = await postResponse.json();
  const comments = await commentResponse.json();

  const Data = posts.map((post) => {
    const postComments = comments.filter(
      (comment) => comment.postId === post.id
    );

    return {
      ...post,
      comments: postComments,
      commentCount: postComments.length,
    };
  });

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(Data));
};


module.exports = postCommentsHandler;