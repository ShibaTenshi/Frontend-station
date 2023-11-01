export const timeFormat = (openDate:String, openTime:String, closeTime:String) => {
    const listDate = openDate.split("",openDate.length)
    for (let index = 0; index < openDate.length; index++) {
        console.log(listDate[index])
    }
}