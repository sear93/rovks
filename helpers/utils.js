export const changeDate = (val) => {

    const date = new Date(val)

    return date.toLocaleString('default', {
        day: "numeric",
        year: "numeric",
        month: "long"
    })
}

export const delay = (fn, ms) => new Promise((resolve) => setTimeout(() => resolve(), ms)).then(() => fn())