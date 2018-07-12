const monthToLocalisationString = monthNumber => ([
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
][monthNumber]) 

const unixtimeToString = unixtime => {
    unixtime = String(unixtime).length === 10 ? unixtime * 1000 : unixtime
    const date = new Date(unixtime)
    return date.getDate() + ' '
        + monthToLocalisationString(date.getMonth()) + ' '
        + date.getFullYear()
        
}

export { unixtimeToString }