type NameList = {
    name: string,
    age: number
}

export const axios = (url: string): Promise<NameList[]> => {
    return new Promise((resolve) => {
        let xhr: XMLHttpRequest = new XMLHttpRequest()

        xhr.open('GET', url)

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status == 200) {
                setTimeout(() => {
                    resolve(JSON.parse(xhr.responseText))
                }, 1000);
            }
        }
        xhr.send(null)
    })
}
