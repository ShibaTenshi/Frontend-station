export const timeFormat = (openDate:string, openTime:string, closeTime:string):string => {
    let dayFormat = ""
    const listDate = openDate.split("",openDate.length)
    const day:string [] = ["Sun. , ","Mon. , ","Tue. , ","Wed. , ","Thu. , ","Fri. , ","Sat."]

    const format = (time:string) => {
        let after =""
        const list:string [] = time.split(":",time.length)
        
        Number(list[0]) > 11 ? Number(list[0]) == 12 ? after += list[0] +"." + list[1] + " p.m" : after += (Number(list[0]) - 12).toString() + "." + list[1] + " p.m" : after +=  list[0] + "." + list[1] + " a.m"

        return after
    }

    if (Number(listDate[0]) + Number(listDate[1]) + Number(listDate[2]) + Number(listDate[3]) + Number(listDate[4]) + Number(listDate[5]) + Number(listDate[6]) == 7){
        dayFormat = "Mon.-Sun."
    }else{
        for (let index = 0; index < openDate.length; index++) {
            if (Number(listDate[index]) == 1){
                dayFormat += day[index]
            }
        }
    }
    dayFormat += " : "

    dayFormat += format(openTime) + " - " + format(closeTime)

    return dayFormat
}