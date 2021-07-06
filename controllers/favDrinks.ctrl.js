"use strict";
const mongoose = require("mongoose");
const drinkModel = require("../models/drinkSchema.modal");

const addTofav = (req, res) => {
  const { name, img, id } = req.body;
  const newFav = new drinkModel({ name: name, img: img, id: id });
  newFav.save();
  res.send("added to your favorites drinks !!");
  // drinkModel.find({}, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("=================", data);
  //     data.map((drink) => {
  //       console.log(typeof id, typeof drink.id);
  //       if (Number(drink.id) === Number(id)) {
  //         res.send("the drink already exist !");
  //       } else {
  //         const newFav = new drinkModel({ name: name, img: img, id: id });
  //         newFav.save();
  //         res.send("added to your favorites drinks !!");
  //       }
  //     });
  //   }
  // });
  // console.log(newFav);
};

const getFav = (req, res) => {
  drinkModel.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);

      res.send(data);
    }
  });
};

const deleteFav = (req, res) => {
  const id = req.params.id;
  drinkModel.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      drinkModel.find({}, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.send(data);
        }
      });
    }
  });
};

const updateFav = (req, res) => {
  const { name, img, drinkId, id } = req.body;
  drinkModel.findOne({ _id: id }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data.name = name;
      data.img = img;
      data.id = drinkId;
      data.save().then(() => {
        drinkModel.find({}, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.send(data);
          }
        });
      });
    }
  });
};

module.exports = { addTofav, getFav, deleteFav, updateFav };
