const sendEmail = require("../utils/sendEmail");


async function participantEmail(req, res) {
    try {
        const { email, emailText } = req.body //how csn I get the email dexcription for the particular box
        if (!email) {
            return res.status(400).json({
                message: "Please provide email",
                error: true,
                success: false
            })

        }
        if (!emailText) {
            return res.status(400).json({
                message: "Please provide email text",
                error: true,
                success: false
            })

        }
        // const send_to = process.env.EMAIL_SEND_TO;
        const send_to= email;
        const sent_from = process.env.EMAIL_USER;
        // const reply_to = process.env.EMAIL_SEND_TO;
        const reply_to = email;
        const subject = "Thank You Message";
        //     const message = `
        //       <h3>Hello Participant</h3>
        //       <p>Thanks for showing your interest in participating for our event</p>
        //       <p>Regards EventNexus</p>
        //   `;
        const message = emailText;

            await sendEmail(subject, message, send_to, sent_from, reply_to);
        res.status(200).json({ success: true, message: "Email Sent" });



    } catch (err) {
        res.status(500).json({
            message: err,
            error: true,
            success: false
        })
    }

}

module.exports = participantEmail