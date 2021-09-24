
function talkAboutCheese(){
    console.log("%c I Love Cheese!","color:green; font-style:italic; font-size: 40px");
};

talkAboutCheese();

function talkAboutSpecificCheese(cheeseType,colour,fontSize){
    console.log(`%c ${cheeseType} is my favourite, this week.`,`color:${colour};font-size: ${fontSize}px`);
}
talkAboutSpecificCheese("Rose De Tomate","green", 100);

