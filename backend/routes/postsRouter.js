const express = require('express');
const {authMiddleware} = require('../middlewares/middlewares')
const {Account, Posts} = require('../schemas/db');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.get("/", authMiddleware,async (req, res) => {
    try {
      const post = await Posts.find();
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
});
router.get("/:userId/posts", authMiddleware, async (req, res) => {
    try {
      const { userId } = req.params;
      const post = await Posts.find({ userId });
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
});


router.patch("/:id/like", authMiddleware, async (req, res) => {
    try {
      const { id } = req.params;
      const { userId } = req.body;
      const post = await Posts.findById(id);
      const isLiked = post.likes.get(userId);
  
      if (isLiked) {
        post.likes.delete(userId);
      } else {
        post.likes.set(userId, true);
      }
  
      const updatedPost = await Posts.findByIdAndUpdate(
        id,
        { likes: post.likes },
        { new: true }
      );
  
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  });



module.exports = router;