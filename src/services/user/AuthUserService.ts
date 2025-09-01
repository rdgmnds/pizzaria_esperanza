import prismaClient from "../../prisma";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest){

        // verifica se os campos foram preenchidos
        if (!email || !password){
            throw new Error("Preencha todos os campos");
        }
        ////////

        // verifica se o e-mail existe
        const user = await prismaClient.user.findFirst({
            where: {
                email: email,
            }
        })

        if (!user){
            throw new Error("Usuário/senha incorreto");
        }
        ////////

        // verifica se a senha está correta
        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch){
            throw new Error("Usuário/senha incorreto");
        }
        ////////

        // gera o token do Usuário
        const token = sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d' 
            }
        )
        ////////

        return {
            id: user.id,
            email: user.email,
            token: token,
        };
    }
}

export { AuthUserService };