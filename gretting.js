const form  = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing"
function saveName(text){
    localStorage.setItem(USER_LS,text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);//동적으로 css 에 작성한 showing 이란 클래스를 추가 한다. 
    form.addEventListener("submit",handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);//동적으로 css 에 작성한 showing 이란 클래스를 제거 한다. 
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //he or she is not 
        askForName();
        
    }else{
        //he or she is 
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}

init();