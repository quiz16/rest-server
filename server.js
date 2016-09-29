var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );

app.use( bodyParser.urlencoded( { extended : true } ) );
app.use( bodyParser.json() );

var port = process.env.PORT || 8080;

// ROUTES

var router = express.Router();

// middleware
router.use( function ( req, res, next ) {
	console.log( 'doing a thing' );
	next();
} );

router.get( '/', function ( req, res ) {
	res.json( { 'message' : 'HI' } );
} );

router.route( '/items' )
	// add an item
	.post( function ( req, res ) {
		res.json( { 'message' : 'item added!' } );
	} )
	// get all items
	.get( function ( req, res ) {
		res.json( { 'message' : 'list of items!' } );
	} );

router.route( '/items/:item_id' )
	// get single item
	.get( function ( req, res ) {
		res.json( { 'message' : 'single item!' } );
	} )
	// update an item
	.put( function ( req, res ) {
		res.json( { 'message' : 'item updated!' } );
	} )
	// delete item
	.delete( function ( req, res ) {
		res.json( { 'message' : 'item deleted!' } );
	} );

app.use( '/api', router );

app.listen( port );

console.log( 'listening on port ' + port );
