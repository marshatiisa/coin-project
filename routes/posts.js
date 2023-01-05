const express = require("express")
const router = express.Router()
const postsController = require("../controllers/posts")
const { ensureAuth, ensureGuest } = require("../middleware/auth")

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost)
//ask why /post/:id doesn't work ---!!!!!!!!!!!!!!!!!!!!
router.post("/createPost", postsController.createPost);

router.put("/complete/:id", postsController.complete)

router.delete("/deletePost/:id", postsController.deletePost)

module.exports = router;
