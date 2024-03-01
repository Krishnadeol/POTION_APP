const mogoose = reuire('mogoose');
const { Schema } = mongoose;

const DonationLogSchema = new Schema ({
	fromUser: {
		type: String,
		required: true
	},

	toNgo: {
		type: String,
		required: true,
	},

	amount: {
		type: Number,
		required: true
	},

	date: {
		type: Date,
		default: Date.now
	}
});

const DonationLog = mongoose.model('DonationLog', DonationLogSchema);
module.exports = DonationLog;
