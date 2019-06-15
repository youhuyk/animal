var mongoose = require('mongoose');

module.exports = mongoose.model('TBCU_USR', {
	usr_id : String,
	usr_pass : String,
	usr_nm : String,
	usr_addr_no : Integer,
	usr_ctel_no : Integer,
	usr_email : String,
	auth_key : String,
	auth_yn : Boolean,
	create_date : Date,
	create_usr : String,
	update_date : Date,
	update_usr : String,
	create_yn : Boolean
});