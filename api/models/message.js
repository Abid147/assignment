const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
	subject: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	isRead: {
		type: Boolean,
		required: true,
		default: false
	}
})


module.exports = mongoose.model('Message', messageSchema)