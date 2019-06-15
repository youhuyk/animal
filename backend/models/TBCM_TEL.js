var mongoose = require('mongoose');

module.exports = mongoose.model('TBCM_TEL', {
	tel_no : Integer,
	type_code : String,
	fst_no : Integer,
	scd_no : Integer,
	trd_no : Integer,
	create_date : Date,
	create_usr : String,
	update_date : Date,
	update_usr : String,
	use_yn : Boolean
});