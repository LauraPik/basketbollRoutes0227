const {promisify} = require('util');
const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const { error } = require('console');

const signToken = (id)=>{
  return jwt.sign({
    id:id
  }, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXPIRES_IN})
}

exports.signup = async(req, res)=>{
    try{
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
          });
          const token = jwt.sign({
            id:newUser._id
          }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})
      

          res.status(201).json({
            status: "Success",
            data: { newUser},
            token
          });
        } catch (err) {
          res.status(400).json({
            status: "Fail",
            message: err.message,

          });
        }
}

// loginas
exports.login = async (req, res)=>{
  try{
    // reikia eimail ir pasword
    const {email, password} = req.body;

    if(!email|| !password){
      throw new Error("Please provide email and password")
    }
    // patikrinti ar yra user ir slaptazodis teisingas
    const user = await User.findOne({email}).select('+password');
    if(!user || !(await user.correctPassword(password, user.password)) ){

      throw new Error("Incorect email or password")

    }

    const token = signToken(user.id);
    res.status(201).json({
      data:{
        id: user.id,
        name: user.name,
        email: user.email

      },
      token
    })

  }catch(err){
    res.status(400).json({

      status: "Failed",
      message: err.message

    })
  }
}

exports.logOut =  async (req, res) => {
  try {
    // Extract token from authorization header
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new Error('Unauthorized');
    }

    // Verify token (replace with your verification logic)
    const decoded = jwt.verify(token, 'your_secret_key'); // Use your actual secret key
    const userId = decoded.id;

    // Send successful logout response
    res.status(200).json({ message: 'Successfully logged out' });
  } catch (err) {
    res.status(401).json({ 
      status: 'Failed', 
      message: err.message 
    });
  }
};


// apsaugoti nuo neautentifikuotu vartotoju, middelwear. Tikrintis ar yra bearwe token
exports.protect = async (req, res, next)=>{
//  1: Getting token
let token;
try{
 
  if(
    req.headers.authorization && req.headers.authorization.startsWith('Bearer')
  ){
    token = req.headers.authorization.split(' ')[1]
    // console.log(token)

  }
  if(!token){
    throw new Error('User not autentificated')
  }
 // 2. Verification token
 const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
 console.log('decoded', decoded)
 
 // 3. check if a user still exist, paduoda decoded id ir iesko
 const currentUser = await User.findById(decoded.id);
 if(!currentUser){
   throw new Error('user no exist')
 }
 // 4. check if the user changed the password after token was issued
 if(currentUser.changedPasswordAfter(decoded.iat)){
   throw new Error('User changed password')
 }
//  suteikiama prieiga
req.user = currentUser;

// kai catch bloke imeti next ilgai loopina
next()
  
}catch(err){
  res.status(400).json({
    status: "failed",
    message:err.message
  })
  
}


}