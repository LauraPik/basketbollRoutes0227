const mongoose = require('mongoose');
const validator = require('validator');
// pirmas usinam
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please tell use your name"]
    },
    email:{
        type: String,
        // tikrins ar email'as
        required: [true, "Please provide your email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide your email"]
    },
    password:{
        type: String,
        required: [true, "Please provide a password"],
        minlength: 8,
        select: false
    },
    passwordConfirm:{
        type: String,
        required: [true, "Please confirm your password"],
        validate:{
            validator: function(el){
                return el === this.password
            },
            message: "Password are not the same"
        }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active:{
        type: Boolean,
        default: true,
        select: false
    }
})

// enksriptinama pries issaugant duomenis
userSchema.pre('save', async function(next){
    // tikriname ar slaptazodis sukurtas
    if(!this.isModified('password')) return next();
    // labai aukšto skaiciaus nera verta deti
    this.password = await bcrypt.hash(this.password, 12);

    this.passwordConfirm = undefined;

    next();

})

userSchema.methods.correctPassword = async (
    candidatePassword,
    userPassword
)=>{

    // tikrina, ar ivestas slaptazodis teisingas:
    return await bcrypt.compare(candidatePassword, userPassword);


}

// per methods kviesime del to reikia apsirasyti, kaip klasikine
userSchema.methods.changedPasswordAfter = function(JWTTimestamp){
    if(this.passwordChangedAt){
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime()/1000,10
        );
        return JWTTimestamp < changedTimestamp;
    }
}

const User = mongoose.model("User", userSchema);
// truko sio eksporto
module.exports = User;