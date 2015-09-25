//CONTROLLER
var Article = require('../models/article');

function create( req, res ) {
	//Instantiate a new article using our awesome Schema:
	var article = new Article( req.body );
	//console.log(req.body);
    //save the Article 
    article.save( function( err ) { 
    	if( err ){
    		console.error( 'not able to create article b/c ' +err )

    	}else{
			res.json( { message: 'Article successfully created!' } ) ;    
		}

	});

}

function index( req, res ) {
  Article.find(function( err, articles ) {
    if( err ){
    	console.log( 'Could not retrieve articles b/c: ' + err );
    }else{
    	res.json( articles )
    }

  });

}

//CRUD goes here

function show(request, response) {
  response.json(request.article);
}

function update(request, response) {
  var data = request.body;
  var article = request.article
  
  Object.keys(data).forEach(function(key) {
    article.set(key, data[key]); // set replaces the value of a field with the specified value
  });
  
  article.save(function(error) {
    if (error) console.error('Could not update article b/c:', error);
    response.json({message: 'Article successfully updated'});
  });
}

function destroy(request, response) {
  Article.remove({ _id: request.params.article_id }, function(error) {
    if (error) console.error('Could not delete article b/c:', error);
    response.json({message: 'Article successfully deleted'});
  })
}

module.exports = {
  create: create,
  index: index,
   show: show,
  update: update,
  destroy: destroy
};