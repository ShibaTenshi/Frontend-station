export const checkEmail = (email:string) =>{
    const pattern = /.+\@.+\...+/g

    try {
        if (email.match(pattern) == null){
            return 0
        }
        else{
            return 1
        }
    } catch (e) {
        console.log(e);
    }
}