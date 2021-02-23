import mongoose, { Schema } from 'mongoose';
// 암호화 추가
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    username : String,
    hashedPassword : String
});

UserSchema.methods.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
}

UserSchema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result;  // true/false
};

UserSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });
}

// JSON 으로 변환한 후 delete 로 지워주기
UserSchema.methods.serialize = function() {
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
}

const User = mongoose.model('User', UserSchema);

export default User;