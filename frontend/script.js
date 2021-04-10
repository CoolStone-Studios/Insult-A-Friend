window.onload = () => {

fetch('/config').then(res => {
res.json().then(r => {

    let link = document.querySelector("link[rel~='icon']")
    if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.getElementsByTagName('head')[0].appendChild(link)
    }

    link.href = r.favicon

    document.title = r.title

})
})

//This is so you can easily set a config from "config.json"
}





document.getElementById('sendbttn').addEventListener('click', () => {
if(!document.getElementById('from').value || !document.getElementById('to').value){ return alert('Please add emails!') }

const opt = {
method:"POST",
headers:{
from:document.getElementById('from').value,
to:document.getElementById('to').value,
allowNSFW:document.getElementById('allownsfw').checked
}
}

fetch('/insult', opt).then(res => {

if(res.status === 200){
alert('Sent insult!')
}else{
alert('Something went wrong 😞')
}

})

})

document.getElementById('nsfw').addEventListener('click', () => {
document.getElementById('allownsfw').checked = !document.getElementById('allownsfw').checked 
})