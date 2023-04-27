const friends = require("../models/friends.model");

function getFriend(req, res) {
  const friendId = +req.params.friendId;
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({ error: "friend not found" });
  }
}

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "missing friend name",
    });
  }
  const friend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(friend);
  res.json(friend);
}

module.exports = {
  getFriend,
  postFriend,
};
