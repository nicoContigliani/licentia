import jwt from 'jsonwebtoken';
import 'dotenv/config'


export const jwtGenerateToken = async (data: any) => {
    return jwt.sign(data, process.env.JWT_SIGNATURE_GENERAL, { expiresIn: 3600 });
}

export const jwtCompareToken = async () => {

}