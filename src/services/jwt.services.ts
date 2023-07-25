import jwt from 'jsonwebtoken';
import 'dotenv/config'


export const jwtGenerateToken = async (data: any) => {
    const token = jwt.sign({ userId: 15 }, 'tu-secreto', { expiresIn: 3600 });

    interface IdataPersonObject {
        firstname: string,
        mail: string,
        password: string
    }

    const dataUser: IdataPersonObject[] = [];

    const firstname: string = "nico";
    const mail: string = "nico.contigliani@gmai.com"
    const password: string = "123456789";
    const isUser: boolean = true;
    const fullname: string = "nicolasContigliani";
    const numberGetin: number = 15;
    dataUser.push({
        firstname,
        mail,
        password
    })
    console.log("🚀 ~ file: jwt.services.ts:27 ~ jwtGenerateToken ~ dataUser:", dataUser)



   return token



}

export const jwtCompareToken = async () => {

}