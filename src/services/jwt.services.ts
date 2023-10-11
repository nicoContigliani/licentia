import jwt from 'jsonwebtoken';
import 'dotenv/config'


export const jwtGenerateToken = (data: any, datatime: any) => {
    let secretKey: any = process.env.JWT_SECRET_LICENCE; // Replace with your secret key

    const token = jwt.sign(data, secretKey, { expiresIn: '10000h' }); // Token expires in 1 hour

    //  return jwt.sign(data, process.env.JWT_SIGNATURE_GENERAL, { expiresIn: 3600 });
    return token

}

export const jwtCompareToken = (data: any) => {
    return data.map((token: any) => jwt.verify(token, process.env.JWT_SECRET_LICENCE || 'pepito123')
    )


}