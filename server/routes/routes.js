var express = require('express');
var router = express.Router();
var model = require('../fileModel.js');

router.get("/:moduleName/:id", function(req, res) {
    var ret = model.get(req.params.moduleName, req.params.id);
    res.send(ret);
});

module.exports = router;
