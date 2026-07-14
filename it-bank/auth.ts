
import { authConfig } from './auth.config'

import bcrypt from 'bcryptjs';
import {z} from "zod";
import Credentials from 'next-auth/providers/credentials';


import { UserModel } from './src/domain/models';
import ApiServices from '@/app/api/ApiServices';
import NextAuth, { DefaultSession } from 'next-auth';
import type { JWT } from "next-auth/jwt"
import { UserModel as CustomUserModel } from "@/domain/models";



//const userDb =
//{
  //  "carolinezengo@gmail.com":{email:"carolinezengo@gmail.com", password:"123"}
//}as Record<string,User>;

//export default function handler(
  //  req:NextApiRequest,
    //res:NextApiResponse)
   // {
     //   const user = JSON.parse(req.body )as User;
        
    //if(userDb[user.email]&& userDb[user.email].password == user.password){
     //res.status(200).json({message:"Authorizade"})
   // }
    //else{
      //  res.status(401).json({message:"Not Autorized"})
   // }
       
    //}

 async function getUser(email:string): Promise<UserModel |undefined> {
  console.log("chegou aqui");
 try{
    const url ="http://localhost:5000/api/"
    const api = new ApiServices(url);
    const response : UserModel[]= await api.get('usuario');
      const user= response.find(a => a.email === email);
    
        console.log("teste responset getuse "+response);

            
         return user;  

        
     
}catch(error)

{
console.error("Erro ocorrido: " +error);

throw new Error ('Erro no usuario');
}
    
}

declare module "next-auth" {
  interface Session {
    user: CustomUserModel & DefaultSession["user"];
  }
}


  declare module 'next-auth/jwt' {
  interface JWT {
    nome: string;
  }
}

export const{ handlers,auth, signIn,signOut} = NextAuth({

   session: { strategy: "jwt"  },
  ...authConfig,
       providers:[
         Credentials({
         async authorize(credentials) {
                 
            const parsedCredentials = z
                .object({ email: z.string().email(),password:z.string().max(10) })
                .safeParse(credentials);

                
                if(parsedCredentials.success){
                           
                  const { email, password} = parsedCredentials.data;
                  const user = await getUser(email);
            
                 console.log("verificar usuario" + JSON.stringify(parsedCredentials, null, 2));
                     // se o usuario nao existir manda nulo
                     if(!user) 
                        return null;
                            
                  console.log("user"+ JSON.stringify(user));

                 const passwordsMaatchHash= await bcrypt.hashSync(user.password,10);
                 const passwordsMaatch= await bcrypt.compare(password.toString(), passwordsMaatchHash);

                   if(passwordsMaatch) return  { name: user.nome, email: user.email, password:user.password };
                   
                   }else{
                  console.log(parsedCredentials.error.format());  
             
                }
               
             console.log('Credenciais Invalidas');
              return null; 
        }

      }),
    ],
  callbacks:{
     async jwt({ token, user}) {
     if (user) {
     token.nome = user.name as string;
    //  Adicione outros campos necessários
      

      console.log("token "+token.nome + token.name);

      
    }
    return token;
    },
     
    async session({ session, token }) {
      // Transfira os dados do token para o objeto da sessão que será acessível no front/back
      if (token) {
        session.user.name = token.nome as string;

        console.log(token.nome + token.name + session.user.name);
       
      }
      return session;
    },
      }
 
 
})


   
   