const express = require("express");
const router = express.Router();
const treatsCtrl = require("../../controllers/api/treats");

// GET /api/treats
router.get("/", treatsCtrl.getAllTreats);

// GET /api/treats/:id
// router.post("/treats/:id", treatsCtrl.createTreat);
router.post("/", treatsCtrl.createTreat);

router.get("/:id", treatsCtrl.getTreatById);

router.put("/:id", treatsCtrl.updateTreat);

router.delete("/:id", treatsCtrl.deleteTreat);

module.exports = router;
