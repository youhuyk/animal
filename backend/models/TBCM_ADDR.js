var mongoose = require('mongoose');

module.exports = mongoose.model('TBCM_ADDR', {
	addr_no : Integer,
	addr_base : String,
	addr_detail : String,
	addr_city : String,
	addr_country : String,
	addr_district : String,
	create_date : Date,
	create_usr : String,
	update_date : Date,
	update_usr : String,
	use_yn : Boolean
});