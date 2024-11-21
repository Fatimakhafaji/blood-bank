const mongoose = require ('mongoose') ;
const colors = require ('colors') ;

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`CONNECTED TO MONGOdb DATABASE ${mongoose.connection.host}`);
        
    } catch (error) {
        console.log(`MONGODB database error ${error}`.bgRed.white)
        
    }

}

module.exports = connectDB ;


