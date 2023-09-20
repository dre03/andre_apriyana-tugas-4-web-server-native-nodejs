const postHandler = require("../handler/postHandler");
const commentHandler = require("../handler/commentHandler");
const postCommentHandler = require("../handler/postCommentHeadler")

const router = {};
router.init = (req, res) => {
  if (req.url === "/api/post/get") {
    postHandler.getAllPost(req, res);
  } else if (req.url === "/api/comment/get") {
    commentHandler.getAllComment(req, res);
  } else if (req.url === "/api/post-comment/get") {
    postCommentHandler.getAllPostComment(req, res);
  } else {
    res.end("Not Found Route !");
  }
};
module.exports = router;
