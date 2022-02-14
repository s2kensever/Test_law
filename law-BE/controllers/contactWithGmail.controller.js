const contactWithGmail = require('../services/contactWithGmail.service');



const addNewContactWithGmail = async (req, res) => {
    const mess = await contactWithGmail.addNewContactWithGmail(req.body);
    res.send(mess)
}   


module.exports = {    
    addNewContactWithGmail:addNewContactWithGmail,
}