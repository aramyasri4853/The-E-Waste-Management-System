const express = require("express");

const router = express.Router();

const EWaste = require("../models/EWaste");


// ================= CREATE =================

router.post("/", async (req, res) => {

  try {

    const ewaste = new EWaste(req.body);

    await ewaste.save();

    res.status(201).json({
      message: "E-Waste submitted successfully",
    });

  } catch {

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// ================= READ =================

router.get("/", async (req, res) => {

  try {

    const ewastes = await EWaste.find();

    res.json(ewastes);

  } catch {

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// ================= UPDATE =================

router.put("/:id", async (req, res) => {

  try {

    await EWaste.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.json({
      message: "Item updated successfully",
    });

  } catch {

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// ================= DELETE =================

router.delete("/:id", async (req, res) => {

  try {

    await EWaste.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item deleted successfully",
    });

  } catch {

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;