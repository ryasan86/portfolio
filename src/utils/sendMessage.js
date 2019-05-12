const sendMessage = async (
  templateId,
  receiverEmail,
  senderEmail,
  name,
  message,
  subject
) => {
  try {
    await window.emailjs.send('mailgun', templateId, {
      name,
      senderEmail,
      receiverEmail,
      message,
      subject
    });
  } catch (err) {
    console.error('Failed to send message. Error: ', err);
  }
};

export default sendMessage;
