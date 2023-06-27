const Treat = require("../../models/treat");

module.exports = {
  getAllTreats,
  createTreat,
  getTreatById,
  deleteTreat,
  updateTreat,
};
async function getAllTreats(req, res) {
  try {
    const treats = await Treat.find({});
    // .populate("user");
    // res.send(treats);
    res.json(treats);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve treats" });
  }
}
async function createTreat(req, res) {
  try {
    const { Ocassion, size, filling, flavour, comments } = req.body;
    // const userId = req.user._id;

    const newTreat = new Treat({
      Ocassion,
      size,
      filling,
      flavour,
      comments,
      // user: userId,
    });
    const savedTreat = await newTreat.save();
    res.status(201).json(savedTreat);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create treat" });
  }
}

async function getTreatById(req, res) {
  try {
    const treatId = req.params.id;

    const treat = await Treat.findById(treatId);
    // (treatId).populate("user");

    if (!treat) {
      return res.status(404).json({ error: "Treat not found" });
    }

    res.json(treatId);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get treat" });
  }
}

async function deleteTreat(req, res) {
  try {
    const treatId = req.params.id;

    // Find the treat by ID
    const treat = await Treat.findByIdAndDelete(treatId);

    if (!treat) {
      return res.status(404).json({ error: "Treat not found" });
    }

    res.json({ message: "Treat deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete treat" });
  }
}

async function updateTreat(req, res) {
  // console.log("req", req.body);
  try {
    const { Ocassion, size, flavour, filling, comments } = req.body;
    const treatId = req.params.id;
    // console.log(treatId);
    // Find the treat by ID"
    const treat = await Treat.findByIdAndUpdate(
      treatId,
      { Ocassion, size, flavour, filling, comments },
      { new: true }
    );
    // console.log(treat)
    if (!treat) {
      return res.status(404).json({ error: "Treat not found" });
    }

    res.json(treat);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update treat" });
  }
}
