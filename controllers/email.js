const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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')


const sendEmail=(req,res)=>{
	console.log('send email!!!!!!!!!!!!')
	const msg={
		to:'hch0612@gmail.com',
		from:'hch0612@hotmail.com',
		subject:req.body.subject,
		text:req.body.text,
	}
	console.log(msg)
	sgMail.send(msg)
		.then(result=>{
		res.status(200).json({
        success: true
    });
		})
		.catch(err=>{
			res.json(err)
		})
}

module.exports  = {
    sendEmail
}