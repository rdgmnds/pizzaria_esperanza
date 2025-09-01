import { hash } from 'bcryptjs';

import prismaClient from "../../prisma";

interface UserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: UserRequest){

        // valida preenchimento do e-mail
        if (!email){
            throw new Error("Digite um e-mail válido");
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists){
            throw new Error("Esse e-mail já existe");
        }
        ////////

        // criptografa senha
        const passwordHash = await hash(password, 8)
        ////////

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
            },
            // define os campos a retornarem na resposta
            select:{
                id: true,
                name: true,
                email: true,
            }
        })

        return user;
    }
}

export { CreateUserService };