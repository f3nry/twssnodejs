
/*
 * GET home page.
 */

var twss = require('twss');

exports.index = function(req, res){
  if(req.isXMLHttpRequest) {
    res.contentType('json');

    var query_resp = { 
      twss: twss.is(req.query.twss)  
    };

    res.send( JSON.stringify(query_resp) );
  } else {
    res.render('index', { title: 'Express' })
  }
};

