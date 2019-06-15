var mongoose = require('mongoose');

module.exports = mongoose.model('TBGU_BORD_TAIL', {
	tail_no : Integer,
	content : String,
	usr_id : String,
	secret_yn : Boolean,
	bord_no : Integer,
	create_date : String,
	create_usr : String,
	update_date : String,
	update_usr : String,
	create_yn : Boolean
});