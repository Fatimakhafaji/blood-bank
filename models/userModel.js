const { mongoose } = require('mongoose');
const userSchema = new mongoose.Schema({
    role :{
        type : String ,
        required :[true , `role is required`],
        enum : ['admin','orgnisation','donar', 'hospital']
    },
    name :{
        type : String,
        required: function(){
            if (this.role === 'user' || this.role === 'admin'){
                return true 
            }
            return false 
        }
    },
    orgnisationName :{
        type : String,
        required: function(){
            if (this.role === 'orgnisation'){
                return true
            }
            return false 
        }
    },

    hospitalName :{
        type : String,
        required: function(){
            if (this.role === 'hospital'){
                return true
            }
            return false 
        }
    },
    email :{
        type : String,
        required :[true ,`email is requireed`],
        unique : true
    },
    password :{
        type : String,
        required :[true , `password is required`],
        validate: {
            validator: function(v) {
                return v && v.length >= 8;
            },
            message: 'Password should be at least 8 characters long.'
        } 
    },
    website :{
        type : String
    },
    address :{
        type : String ,
        required :[true , `address is required`]
    },
    phone :{
        type : String ,
        required :[true , `phone number is required`],
        validate: {
            validator: function(v) {
                return v && v.length == 10;
            },
            message: ' The phone number should be 10 Number.'
        } 
    },

},{timestamps : true});

module.exports = mongoose.model('users',userSchema);