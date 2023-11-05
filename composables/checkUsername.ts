export const checkUsername = (username:string) =>{
    const pattern = /[\/\\\^\&\%\$\#\!\+\_\=\-\)\(\*\)\?\.\,\<\>\'\"\:\;\|\]\[\*\^\%\$\#\@\!\`\~\]]/g

    try {
        if (username.match(pattern) == null){
            return 1
        }
        else{
            return 0
        }
    } catch (e) {
        console.log(e);
    }
}