import { User } from "@/domain/models";
import { NextApiRequest, NextApiResponse } from "next";

const userDb =
{
    "carolinezengo@gmail.com":{email:"carolinezengo@gmail.com", password:"123"}
}as Record<string,User>;

export default function handler(
    req:NextApiRequest,
    res:NextApiResponse)
    {
        const user = JSON.parse(req.body )as User;
        
    if(userDb[user.email]&& userDb[user.email].password == user.password){
     res.status(200).json({message:"Authorizade"})
    }
    else{
        res.status(401).json({message:"Not Autorized"})
    }
       
    }