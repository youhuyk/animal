var mongoose = require('mongoose');

module.exports = mongoose.model('TBGU_BORD', {
	bord_no : Integer,
	bord_type : String,
	title : String,
	content : String,
	usr_id : String,
	create_date : Date,
	create_usr : String,
	update_date : Date,
	update_usr : String,
	create_yn : Boolean
});