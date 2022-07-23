const mongoose = require('mongoose');

const ConnectDB = async (DB) => {
    try{
      await mongoose.connect(DB,{ useNewUrlParser : true, useUnifiedTopology : true});
      console.log(`connection Succesfull 👌👌👌👌`);
    }
    catch(err) {
        console.log(err.message);
    }
}

module.exports = {
    ConnectDB,
}