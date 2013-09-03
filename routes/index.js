
/*
 * GET home page.
 */

exports.index = function(req, res){
  var parsedJSON = require('../public/lists/webdevChecklist.json');
  res.render('index', { title: 'Web checklist',
                        description:'This is a simple list of the things that you need to achieve'+
                        'in order to become a great web developer',
                        items: parsedJSON });
};
