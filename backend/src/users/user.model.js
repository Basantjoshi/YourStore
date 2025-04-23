const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new Schema({ 
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    role: {type: String, required: true, default: 'user'},
    profileImage: {type: String},
    bio: {type: String, maxlength: 200}, 
    profession: {type: String},   
    createdAt: {type: Date, default: Date.now},
}
);
//hash password before saving to database
userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword; 
        next();
  
});

//match password
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = new model('User', userSchema);
module.exports = User;
    

