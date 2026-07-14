'use server'


import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { signIn } from '../../../auth';
import { AuthError } from "next-auth";
import { redirect } from 'next/navigation';

export async function authenticate(
   
     formData: FormData) {
           try{         
     await signIn('credentials',{
        ...Object.fromEntries(formData),

      redirect:false
        
  });
  } catch (error)
   {
    //erro do redirecionamento
    if (isRedirectError(error)) {
          console.log(error.message+ error.digest+error.cause);
      throw error;
    }
    
     // erro do usuario
        if (error  instanceof AuthError) {
            switch(error.type){
                case 'CredentialsSignin':
           
                     return { 
                  
                error: { message: error}
                
            }
            
            default:
                console.log(error);
           return 'algo deu de errado no servido';
           
            }
        
        }
        throw error;  
    }
 redirect("/account");
}