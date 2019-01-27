const sendMessage = async (templateId, receiverEmail, senderEmail, name, message) => {
  try {
    await window.emailjs.send('mailgun', templateId, {
      name,
      senderEmail,
      receiverEmail,
      message
    });
  } catch (err) {
    console.error('Failed to send message. Error: ', err);
  }
};

export { sendMessage };
