var mongoose = require('mongoose');

module.exports = mongoose.model('TBCM_CODE_MST', {
	code_mst_code : String,
	example : String,
	code_mst_codeNm : String,
	create_date : Date,
	create_usr : String,
	update_date : Date,
	update_usr : String,
	use_yn : Boolean
});