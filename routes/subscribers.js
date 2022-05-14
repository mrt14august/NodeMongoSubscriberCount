const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

// http://localhost/subscriber/

//getting all
router.get("/", async (req, res) => {
  await Subscriber.distinct("name", (err, subs) => {
    try {
      return res.json(subs);
    } catch {
      return res.status(400).json({ error: "NO subscriber Found" });
    }
  });
});

//getting one
router.get("/:id", getSubscriberFromId, (req, res) => {
  res.send(res.sub);
});

//Creating one

router.post("/", async (req, res) => {
  const data = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });

  try {
    const newSub = await data.save();
    res.status(201).json(newSub);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//updating one
router.patch("/:id", getSubscriberFromId, async (req, res) => {
  if (req.body.name != null) {
    res.sub.name = req.body.name;
  }

  if (req.body.subscribedToChannel != null)
    res.sub.subscribedToChannel = req.body.subscribedToChannel;

  try {
    const updatedSubscriber = await res.sub.save();
    res.json(updatedSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Deleting one
router.delete("/:id", getSubscriberFromId, async (req, res) => {
  try {
    await res.sub.remove();
    res.json({ message: "Deleted Subscriber : ", sub });
  } catch {
    res.status(500).json({ message: err.message });
  }
});

async function getSubscriberFromId(req, res, next) {
  let sub;
  try {
    sub = await Subscriber.findById(req.params.id);
    if (sub == null) {
      return res.status(404).json({ message: "Cannot find the subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.sub = sub;

  next();
}

module.exports = router;
