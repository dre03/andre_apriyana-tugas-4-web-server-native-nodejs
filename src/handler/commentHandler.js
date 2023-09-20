const commentHandler = {};

commentHandler.getAllComment = (req, res) => {
  const apiUrl = "https://jsonplaceholder.typicode.com/comments";
  fetch(apiUrl)
    .then((response) => {
      if (!response) {
        throw new Error(`http error! status : ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      res.end(JSON.stringify(data));
    });
};

module.exports = commentHandler