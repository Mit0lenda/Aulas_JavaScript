export default function copyToClipboard(){
    const button = eval.currentTarget
    if(button.innerText === "Copy"){
        button.innerText = "Copied!"
        button.classList.add("Success")
        navigator.clipboard.writeText(document.querySelector("#result").value)
    } else {
        button.innerText = "Copy"
        button.classList.remove("Success")
    }
}