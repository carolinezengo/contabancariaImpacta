import * as React from "react";
import { mergeClassName } from "@/app/lib/css.helper";

import Link from "next/link";


 const baseCn= "inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

 
const buttonTypes ={
    default:"  bg-black hover:bg-black/90 text-white  hover:text-slate-300",
    secudary:" bg-blue-600 hover:bg-blue/90 text-white hover:text-slate-300",
    destructive:" bg-red-600 hover:bg-red/90 text-white hover:text-slate-300"
}as const;

const buttonSIze={
    default:"h-10 px-4 py-2",
    sm:"h-9 rounded-md px-3 ",
    lg:"h-11 rounded-md py-3 ",
    icon:"h-10 w-10"

} as const;

 export type ButtonTypeProps={
    btnType: keyof typeof buttonTypes
};
export type ButtonSizeProps={
btnSize: keyof typeof buttonSIze
};


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
ButtonTypeProps, ButtonSizeProps { };

export interface LinkButtonProps extends ButtonProps{
    href:string
};

function LinkButton(props:LinkButtonProps){
    const {className,btnType,btnSize,children,href} = props;
    const btnTypeCn=buttonTypes[btnType];
   
return<Link className={mergeClassName(className,baseCn,btnSize,btnTypeCn)} href={href}>{children}
 </Link>


}





 const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
   { className,btnType, onClick,btnSize, ...props},
   ref) => { 
      const btnTypeCn= buttonTypes[btnType];
      const btnSizecn= buttonSIze[btnSize];          

    return( <button className={mergeClassName(className,baseCn,btnSizecn,btnTypeCn)} ref={ref} onClick={onClick} {...props}/>)}); 
    
    Button.displayName="Button";


    export{Button,LinkButton} ;


















    