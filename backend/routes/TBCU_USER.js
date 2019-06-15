var router = require('express').Router();
var TBCU_USER = require('../models/TBCU_USER');

// 참고 url : https://poiemaweb.com/mongoose

/*
 * @ Explan : find all
 * @ Param  : 
 * @ Return : Array<TBCU_USER>
 */ 
router.get('/api/TBCU_USER', function(req, res) {

	TBCU_USER.find(function(err, TBCU_USER) {

		// error
		if (err)
			res.send(err)
		
		// return json format
		res.send(TBCU_USER);
	});
});

/*
 * @ Explan : insert row
 * @ Param  : usr_id, usr_pass, usr_nm, usr_addr_no, usr_ctel_no, usr_email, auth_key
 * @ Return : Boolean
 */ 
router.post('/api/TBCU_USER', function(req, res) {

	// create a todo, information comes from AJAX request from Angular
	TBCU_USER.create({
		usr_id : req.body.usr_id,
		usr_pass : req.body.usr_pass,
		usr_nm : req.body.usr_nm,
		usr_addr_no : req.body.usr_addr_no,
		usr_ctel_no : req.body.usr_ctel_no,
		usr_email : req.body.usr_email,
		auth_key : "",
		auth_yn : false,
		create_date : new Date(),
		create_usr : req.body.usr_id,
		update_date : new Date(),
		update_usr : req.body.usr_id,
		create_yn : true
	}, function(err, tbcu_user) {
		
		if (err) {
			res.send(err);
			res.json({"result" : false});
		} else {
			res.json({"result" : true});
		}

	});

});

/*
 * @ Explan : delete row
 * @ Param  : tbcu_user_id
 * @ Return : Boolean
 */ 
router.delete('/api/TBCU_USER/:tbcu_user_id', function(req, res) {
	TBCU_USER.remove({
		_id : req.params.tbcu_user_id
	}, function(err, tbcu_user) {
		
		if (err) {
			res.send(err);
			res.json({"result" : false});
		} else {
			res.json({"result" : true});
		}

	});
});


/* test for get url Data
 * @ Explan : find data
 * @ Param  : usr_id
 * @ Return : TBCU_USER
 */ 
router.get('/api/TBCU_USER/usr_id/:usr_id', function(req, res) {

	TBCU_USER.find(function(err, tbcu_user) {

		// error
		if (err)
			res.send(err)
		
		// return json format
		res.send(tbcu_user);
	});
});


/*// GET ALL BOOKS
app.get('/api/books', function(req,res){
    res.end();
});

// GET SINGLE BOOK
app.get('/api/books/:book_id', function(req, res){
    res.end();
});

// GET BOOK BY AUTHOR
app.get('/api/books/author/:author', function(req, res){
    res.end();
});

// CREATE BOOK
app.post('/api/books', function(req, res){
    res.end();
});

// UPDATE THE BOOK
app.put('/api/books/:book_id', function(req, res){
    res.end();
});

// DELETE BOOK
app.delete('/api/books/:book_id', function(req, res){
    res.end();
});*/


module.exports = router;
