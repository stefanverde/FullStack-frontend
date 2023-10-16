const sendMailAPI = async (email:string) => {
    await fetch(`${process.env.REACT_APP_SEND_MAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
}

export default sendMailAPI;