
export const changeDate = (val) => {

    const date = new Date(val)
    
    return date.toLocaleString('default', {
        day: "numeric",
        year: "numeric",
        month: "long"
    })
}
