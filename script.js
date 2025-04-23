const URL = "https://meowfacts.herokuapp.com/"
const box = document.body.querySelector(".fact")

const gettxt = (async () => {
    console.log("getting data.....")
    let response = await fetch(URL)
    let txt = await response.json()
    let final = txt.data
    box.append(final)
})()