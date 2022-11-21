const formatDate = (date) => {
    console.log(date)
    const year = date.slice(0,4)
    const month = date.slice(5,7)
    const day = date.slice(8,10)
    return `${month}.${day}.${year}`
}

export default formatDate