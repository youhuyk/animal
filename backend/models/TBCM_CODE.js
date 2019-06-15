var mongoose = require('mongoose');

module.exports = mongoose.model('TBCM_CODE', {
	code : String,
	code_kor_nm : String,
	code_eng_nm : String,
	example : String,
	code_mst_code : String,
	create_date : Date,
	create_usr : String,
	update_date : Date,
	update_usr : String,
	use_yn : Boolean
});