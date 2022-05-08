const express = require("express");

const cart = require("../model/cartmodel");



const router = express.Router();

router.post("", async (req, res) => {
  console.log(req.body);
    
  try {
    // console.log(req.user, req.user._id);
    // console.log(req.headers);
    //  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    //    new: true,
    //  });
    
    const b = await cart.create(
      
        req.body
      
      // {
      //   new: true,
      // }
    );

    return res.send(b);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     console.log(req.params.id);

//     const bag = await Bag.find({ user_id: { $eq: req.params.id } })
//       .lean()
//       .exec();
//     console.log(bag);
//     return res.send(bag);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

router.get("/:id", async (req, res) => {
  try {
    console.log(req);

    const b = await cart.find({ userid: { $eq: req.body.id } })
      .lean()
      .exec();
    console.log(b);
    return res.send(b);
  } catch (err) {
  
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id);

    const b = await cart.findByIdAndDelete(req.params.id).lean().exec();
    console.log(b);
    return res.send(b);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
