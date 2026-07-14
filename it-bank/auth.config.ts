import type { NextAuthConfig} from "next-auth";


export const authConfig ={
  providers:[],
       pages:{
        signIn:'/login'
       },
   callbacks: {
     authorized({auth, request:{nextUrl}}){
        const isLoggenIn = !!auth?.user
        const isOnDashboard = nextUrl.pathname.startsWith('/account')
                
        if(isOnDashboard){
          if(isLoggenIn) return true;
          return false;
                                
        }else if(isLoggenIn){
        
             return Response.redirect(new URL('/account',nextUrl));
         
        }
    
      return true;
      },
}   
   
}satisfies NextAuthConfig