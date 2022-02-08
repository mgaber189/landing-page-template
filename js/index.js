
/*setting box */
let stopbackchange;
let backchosevalue =true;
let setting=document.querySelector(".settingbox");
let icon=document.querySelector(".fa-cog");
icon.onclick=function(){
    this.classList.toggle("fa-spin");
    setting.classList.toggle("open");
} 
let color=document.querySelectorAll(".setting-container .optionbox li");
color.onclick=function(){
    this.classList.toggle("active");
}
/* change the color in root when i click on any li and remove active class from other and add to it  */
color.forEach( li => {
    li.addEventListener("click",(e)=>{
        let maincolor = e.target.dataset.col;
        document.documentElement.style.setProperty('--main-color',maincolor);
        localStorage.setItem("main-color",maincolor);
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active");
        })
        e.target.classList.add("active");
    })
    
});
/* (end) change the color in root when i click on any li and remove active class from other and add to it  */
/*setting box */ 
/*changing background n control box*/
/*active class*/

let btn=document.querySelectorAll(".setting-container .optionbox .btnbackground .btn");
btn.forEach( el => {
    el.addEventListener("click",(e)=>{
        e.target.parentElement.querySelectorAll(".active").forEach(btn => {
            btn.classList.remove("active");
        })
        e.target.classList.add("active");
        if(e.target.dataset.value==="yes"){
            backchange();
            localStorage.setItem("backgroundop",e.target.dataset.value);
        }else{
            clearInterval(stopbackchange);
            localStorage.setItem("backgroundop","no");            
        }
    })

})
/*active class*/
/*changing background */
function backchange(){
    let backgroundchange = document.querySelector(".landing");
    backgroundchange.style.backgroundImage='url("./image/5.jpg")';
    let archange=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]
    stopbackchange =setInterval(() => {
        let rand=Math.floor(Math.random()*archange.length);
        backgroundchange.style.backgroundImage='url("./image/'+archange[rand]+'")';
    }, 10000);
}
/*changing background */
/*changing background n control box*/
/*localstorage in loading the page*/
let backop=localStorage.getItem("backgroundop");
let themaincolor=localStorage.getItem("main-color");
if(themaincolor!==null){
    document.documentElement.style.setProperty('--main-color',themaincolor);
    document.querySelectorAll(".setting-container .optionbox li").forEach(e => {
        e.classList.remove("active");
        if (e.dataset.col===themaincolor){
            e.classList.add("active");
        }
    });
}
let btnactivey=document.querySelector(".setting-container .optionbox .btnbackground .yes");
let btnactiven=document.querySelector(".setting-container .optionbox .btnbackground .no");
if(backop==="yes"){
    backchange();
    btnactivey.classList.add("active");
}else{
    btnactiven.classList.add("active");

}
/*(end)localstorage in loading the page*/
/*skills section*/
let skills=document.querySelector(".skills");
window.onscroll=function(){
    let skillscontaintop=skills.offsetTop;
    let skillsheight=skills.offsetHeight;
    let screenheight=this.innerHeight;
    let scrollaction= this.pageYOffset;
    let proge=document.querySelectorAll(".skills .continer .skillbox .progressskill span");
    if(scrollaction > (skillscontaintop + (0.5*skillsheight) - screenheight)){
        proge.forEach(el=>{
            el.style.width=el.dataset.prog;
        });
    }else{
        proge.forEach(el=>{
            el.style.width=0;
        });
    }
    /*........................................................*/
    let anileftcards=document.querySelectorAll(".time-line .time-content .left");
    let anirightcards=document.querySelectorAll(".time-line .time-content .right");
    let timesec=document.querySelector(".time-line");
    let timecontop=timesec.offsetTop;
    let timeheight=timesec.offsetHeight;
    if(scrollaction > (timecontop + (0.5*timeheight) - screenheight)){
        anileftcards.forEach(es=>{
            es.classList.add("leftopen");
        })
        anirightcards.forEach(es=>{
            es.classList.add("rightopen");
        })

    }else{
        anileftcards.forEach(es=>{
            es.classList.remove("leftopen");
        })
        anirightcards.forEach(es=>{
            es.classList.remove("rightopen");
        })
    }
    
}
/*skills section*/
/* our gallery section*/
let ourimg=document.querySelectorAll(".ourgallery .continer .row .col img");
let overlay=document.createElement("div");
let imgtitle=document.createElement("h1");
let imgcard =document.createElement("div");
let theimg=document.createElement("img");
ourimg.forEach(im=>{
    im.addEventListener("click",(eimg)=>{
        theimg.src=im.src;
        imgcard.appendChild(imgtitle);
        imgcard.appendChild(theimg);
        overlay.appendChild(imgcard);
        overlay.classList.add("imgoverlay");
        imgcard.classList.add("card");
        imgtitle.classList.add("imgname");
        imgtitle.innerHTML=im.dataset.title;
        document.body.appendChild(overlay);
    });
})
overlay.addEventListener("click",(e)=>{
    e.target.remove();
});
/* our gallery section*/
/*nav bullet*/
let parentbullet=document.querySelector(".nav-bullets");
let bullbtn=document.querySelectorAll(".settingbox .optionbox .btnnavbullets .btn");
const bullets=document.querySelectorAll(".nav-bullets .bullet");
bullets.forEach(bull=>{
    bull.addEventListener("click",(e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        });
    });
});

bullbtn.forEach(e=>{
    e.addEventListener("click",(el)=>{
        if(el.target.dataset.value=="yes"){
            localStorage.setItem("bulletop",el.target.dataset.value)
        }else{
            localStorage.setItem("bulletop","no")
        }
        e.parentElement.querySelectorAll(".active").forEach(re=>{
            re.classList.remove("active");
        })
        el.target.classList.add("active");
        displayingbullets()
    });    
});
function displayingbullets(){
    let thechosenop=localStorage.getItem("bulletop");
    if(thechosenop==="yes"){
        parentbullet.classList.remove("displaynone");
    }else{
        parentbullet.classList.add("displaynone");
    }
}
let bullbtnyes=document.querySelector(".settingbox .optionbox .btnnavbullets .yes");
let bullbtnno=document.querySelector(".settingbox .optionbox .btnnavbullets .no");
let activechose=localStorage.getItem("bulletop");
function activiation(){
    if(activechose==="yes"){
        displayingbullets()
        bullbtnyes.classList.add("active");
    }else{
        displayingbullets();
        bullbtnno.classList.add("active");
    }
} 
activiation();   
/*nav bullet*/
document.querySelector(".optionbox .btnreset .reset").onclick=function(){
    localStorage.clear();
    window.location.reload();
}
/*reset button*/