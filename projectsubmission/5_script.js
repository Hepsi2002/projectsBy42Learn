
function changeAboutmetext(){
    const aboutmetexts = ["Tech Enthusiast","Web Developer","Fresher"];
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;
    const aboutMeElement = document.querySelector('.about-me');

    let textindex = 0;
    let charindex = 0;
    let isDeleting = false;

    function type(){
        const currentText = aboutmetexts[textindex];
        if(!isDeleting && charindex < currentText.length){
            aboutMeElement.textContent+=currentText[charindex];
            charindex++;
            setTimeout(type,typingSpeed);
        }
        else if(isDeleting && charindex > 0){
            aboutMeElement.textContent=currentText.substring(0, charindex - 1);
            charindex--;
            setTimeout(type,eraseSpeed);
        }
        else{
            isDeleting = !isDeleting;
            if(!isDeleting){
                textindex = (textindex+1)%aboutmetexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }
    type();
}
changeAboutmetext();