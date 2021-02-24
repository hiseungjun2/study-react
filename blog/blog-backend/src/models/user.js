import mongoose, { Schema } from 'mongoose';
// 암호화 추가
import bcrypt from 'bcrypt';
// JWT 추가
import jwt from 'jsonwebtoken';

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

// Token 생성
UserSchema.methods.generateToken = function() {
    const token = jwt.sign(
        // 첫 번째 파라미터에는 토근 안에 집어놓고 싶은 데이터
        {
            _id : this.id,
            username : this.username
        },
        // 두 번째 파라미터에는 JWT 암호
        process.env.JWT_SECRET,
        {
            expiresIn : '7d'    // 7일 동안 유효함
        }
    );
    return token;
}

const User = mongoose.model('User', UserSchema);

export default User;