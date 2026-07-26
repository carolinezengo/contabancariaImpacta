'use server'
import { auth } from "../../../auth";

export  default async function Session(){


    const session = await auth(); 
    const idUserSession = session?.user.id

    return idUserSession
  
}