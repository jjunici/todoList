const form  = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_NAME = "showingname",
    SHOWING_GREETING = "showinggreeting";
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
    form.classList.add(SHOWING_NAME);//동적으로 css 에 작성한 showing 이란 클래스를 추가 한다. 
    form.addEventListener("submit",handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_NAME);//동적으로 css 에 작성한 showing 이란 클래스를 제거 한다. 
    greeting.classList.add(SHOWING_GREETING);
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