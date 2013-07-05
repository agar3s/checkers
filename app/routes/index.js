
/*
 * GET home page.
 */

exports.index = function(req, res){
  var parsedJSON = require('../public/lists/sample.json');
  res.render('index', { title: 'The Checkers Project', items: parsedJSON });
};
