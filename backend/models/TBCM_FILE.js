var mongoose = require('mongoose');

module.exports = mongoose.model('TBCM_FILE', {
	uuid : String,
	table_nm : String,
	pk1 : String,
	pk2 : String,
	pk3 : String,
	pk4 : String,
	pk5 : String,
	real_nm : String,
	data_type : String,
	create_date : Date,
	create_usr : String,
	update_date : Date,
	update_usr : String,
	create_yn : Boolean
});