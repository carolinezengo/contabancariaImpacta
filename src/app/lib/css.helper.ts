export function mergeClassName(...args:Array<string | undefined>){
    const classNameList = args.filter(e=> e !== null && e !== undefined && e !== "");
    return classNameList.join("");
} 