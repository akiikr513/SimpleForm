let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Form
let formSchema = require('../models/Form');

// CREATE Form
router.route('/create-form').post((req, res, next) => {
  formSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Form Public
router.route('/').get((req, res) => {
  formSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single form
router.route('/edit-form/:id').get((req, res) => {
  formSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update form
router.route('/update-form/:id').put((req, res, next) => {
  formSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log('your form updated successfully !');
      }
    }
  );
});

// Delete from
router.route('/delete-form/:id').delete((req, res, next) => {
  formSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
