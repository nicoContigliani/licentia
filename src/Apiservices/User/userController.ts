import jwt from 'jsonwebtoken';

const secretKey = 'your-secret-key'; // Reemplaza por tu propia clave secreta


export const get = async () => {

    try {
        const token = jwt.sign({ userId: 15}, 'tu-secreto', { expiresIn: 3600 });
        console.log("🚀 ~ file: userController.ts:10 ~ get ~ token:", token)


    } catch (error) {
        console.log("🚀 ~ file: userController.ts:13 ~ get ~ error:", error)

    }



}


// module.exports = { get }