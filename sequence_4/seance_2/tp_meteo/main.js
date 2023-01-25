// 0694adcf08049222989713060e6bd6f4

let xhr = new XMLHttpRequest();
const apiKey = "fa36db5e87babab2d66fd8c6fd057c0e";
const lat=33.44
const lon=-94.04
xhr.open('GET',`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
xhr.send()
xhr.onload = onLoad
xhr.onerror = onError
xhr.onprogress = onProgress;
