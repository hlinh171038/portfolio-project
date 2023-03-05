let modalsArr = [
    {'id':1,
     'img':'./image/modal.PNG',
     'title':'modal',
     'content':'when you click button, the popup will be show up',
     'link':'https://hlinh171038.github.io/15-project-js/05-modal/index.html'
    },
    {'id':2,
     'img':'./image/2-slideshow.PNG',
     'title':'slideshow',
     'content':'the picture will automatic show one by one on the screen',
     'link':'https://hlinh171038.github.io/15-project-js/03-reviews/setup/index.html'
    },
    {'id':3,
    'img':'./image/3-navbar.PNG',
    'title':'navbar',
    'content':'learn how to style navbar in css, javascript -- responsive',
    'link':'https://hlinh171038.github.io/15-project-js/04-navbar/setup/index.html'
   },
   {'id':4,
    'img':'./image/4-question.PNG',
    'title':'question',
    'content':'learn how to style and toggle the question in css, javascript ',
    'link':'https://hlinh171038.github.io/15-project-js/07-question/index.html'
   },
   {'id':5,
    'img':'./image/5-section.PNG',
    'title':'section',
    'content':'learn how to create and style section in html,css, javascript -- the way to use the reduce effectively ',
    'link':'https://hlinh171038.github.io/15-project-js/08-section/index.html'
   },
   {'id':6,
    'img':'./image/6-video.PNG',
    'title':'video like picture',
    'content':'learn how to style video in the situation replace the static picture in css, javascript ',
    'link':'https://hlinh171038.github.io/15-project-js/09-video/index.html'
   },
   {'id':7,
    'img':'./image/7-scroll.PNG',
    'title':'scrolling page',
    'content':'the way to scrolling pages smoother, learn  more about viewpoint in window make website be  more beautifule, easy to adjusted make by javascript ',
    'link':'https://hlinh171038.github.io/15-project-js/09-video/index.html'
   },
   {'id':8,
    'img':'./image/8-tabs.PNG',
    'title':'tabs',
    'content':'there are just one tab are appear in this times when we are click to button which contain the corresponding title ',
    'link':'https://hlinh171038.github.io/15-project-js/11-tabs/index.html'
   },
   {'id':9,
    'img':'./image/9-countdown.PNG',
    'title':'count down',
    'content':'this section usually use in the commercial page, it appear when they want to show left time of programing',
    'link':'https://hlinh171038.github.io/15-project-js/12-countdown/index.html'
   },
   {'id':10,
    'img':'./image/10-todolist.PNG',
    'title':'to do list',
    'content':'list of item which you are tying -- have use the local storage',
    'link':'https://hlinh171038.github.io/15-project-js/14-grocery-bud(to-do-list)/index.html'
   },
   {'id':11,
    'img':'./image/11-comment.PNG',
    'title':'comment video',
    'content':'like the yotube of comment, you can like, comment what do you feeling about video',
    'link':'https://hlinh171038.github.io/15-project-js/17-comment-video/index.html'
   },
];
let aboutArr =[
    {
        'title':'history',
        'content':`Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.`
    },
    {
        'title':'about',
        'content':`Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        ` 
    },
    {
        'title':'future',
        'content':`Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.! 
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.` 
    }
]
// toggle nav header
const buttonToggle = document.querySelector('.fa-sharp');
const nav = document.querySelector('.nav-contain');
const navContainer = document.querySelector('.header-contain');
const navLinks = document.querySelector('.nav-contain');
const links = document.querySelector('.links');
const arrow = document.querySelector('.fa-arrow-up');
const cards = document.querySelectorAll('.card');
//----------------------PORTFOLIO------------------------------------
const portfolioContain = document.querySelector('.portfolio-img');
const modals = document.querySelector('.portfolio-modals');
const modalContent = document.querySelector('.model-content');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalTitle = document.querySelector('.modal-title');
const modalLink = document.querySelector('.modal-link');
//---------------------about -section-------------------
const aboutBtn = document.querySelectorAll('.i');
const aboutContent = document.querySelector('.about-content');
//-------------------comment-section----------------------
const likeIcon = document.querySelector('.heart-icon');
const submitBtn = document.querySelector('.submit-btn');
const userValue = document.querySelector('#user');
const commentValue = document.querySelector('.ip3');
const commentContainer = document.querySelector('.comment-container');
const countLikeBtn = document.querySelector('.count');

// add event listener
window.addEventListener('scroll', positionNav);
buttonToggle.addEventListener('click',toggleNav);
window.addEventListener('DOMContentLoaded',loadModal)
portfolioContain.addEventListener('click',openModals);
modalCloseBtn.addEventListener('click',closeModal);
//-------------about-section------------------------

//--------------comment-section-----------------------------------
window.addEventListener('DOMContentLoaded',getLocalStorage)
likeIcon.addEventListener('click',showLikeIcon);
submitBtn.addEventListener('click',submitForm)


// function
function toggleNav(){
    //let navC = navContainer.getBoundingClientRect().height;//108
    let navLs = navLinks.getBoundingClientRect().height;// 0
    let navL = links.getBoundingClientRect().height;
    console.log(navLs,navL);
    if(navLs === 0){
        navLinks.style.height = `${navL}px`;
    }else{
        navLinks.style.height = 0;
    }
}
// top link position fixed
function positionNav(){
    //console.log(window.pageYOffset);// 303 
    let windowY = window.pageYOffset;
    if(windowY >200){
        navContainer.classList.add('nav-fixed');
    }else{
        navContainer.classList.remove('nav-fixed');
    }
    if(windowY > 500){
        arrow.classList.add('arrow');
    }else{
        arrow.classList.remove('arrow');
    }
}
// scroll smooth
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link =>{
    link.addEventListener('click',(e)=>{
        // preventDefault
        e.preventDefault();
        // take element to take topOffset
        let id = e.currentTarget.getAttribute('href').slice(1);
        let element = document.getElementById(id);
        // take height
        let position = element.offsetTop;
        // scrollTo method take object and scroll to this position
        // calculator position
        let navL = navLinks.getBoundingClientRect().height;
        let navHeight = navContainer.getBoundingClientRect().height;
        let subStract = navHeight-navL
        console.log(subStract);
        window.scrollTo({
            left:0,
            top:position-subStract
        })
        //after each times you click, you set nav bar = 0 ( mean : close navbar) 
        navLinks.style.height = 0
    })
})

// lazy loading smooth scroll
let observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})

cards.forEach(card =>{
    observer.observe(card);
})
  
//modal pop up
// load modal
function loadModal(){
    modalsArr.forEach(item =>{
        let containerItem = document.createElement('div');
        containerItem.classList.add('item');
        containerItem.id =item.id;
        let img = document.createElement('img');
        img.classList.add('item-img');
        img.src = item.img
        containerItem.appendChild(img);
        let btn = document.createElement('button');
        btn.classList.add('item-btn');
        btn.textContent = 'click me';
        containerItem.appendChild(btn);
        portfolioContain.appendChild(containerItem);
    })
}
//click modals
function openModals(e){
 console.log(e.target);
 let currentItem = e.target;
 if(currentItem.classList[0]==='item-btn'){
     let parent = currentItem.parentElement;
     console.log(parent.id);
    modals.classList.add('models');
    for(let i=0;i<modalsArr.length;i++){
        if(modalsArr[i].id == parent.id){
            modalContent.textContent = modalsArr[i].content;
            modalTitle.textContent = modalsArr[i].title;
            modalLink.href= modalsArr[i].link;
        }
    }
 }
}
//close modal
function closeModal(){
    modals.classList.remove('models')
}

// .......................................comment -section....................................

    let positiveFeedBack = false;
    let arrFeedBack = [];
    let count =0;
    // submit form
    function submitForm(e){
        e.preventDefault();
        // get obbj( user, cooment) typing 
        let user = userValue.value;
        let comment = commentValue.value;
        // check if user typing user and comment or not
        if(user&&comment){
            let obj ={
                'id':Math.floor((Math.random()*1000)+1),
                'user':user,
                'comment':comment,
                'positiveFeedBack':positiveFeedBack,
            }
            // add obj into arr
            arrFeedBack.push(obj);
            arrFeedBack =saveLocalStorage(obj);
            addNewFeedBack(arrFeedBack);
            // clear form
            resetForm();
            countLike();
        }else{
            console.log('please, typing user and your comment')
        }
    }

    // like icon show
    function showLikeIcon(){
        likeIcon.classList.toggle('liked');
        if(likeIcon.classList.contains('liked')){
            likeIcon.innerHTML = `<i class="fas fa-heart"></i>`;
            positiveFeedBack = true;
        }else{
            likeIcon.innerHTML = `<i class="far fa-heart"></i>`;
            positiveFeedBack = false;
        }
    }

    // add new feed back from user typing
    function addNewFeedBack(arr){
    let result= arr.map(item =>{
        let firstChar = item.user.charAt(0);
        return`<div class="contain">
                <div class="title-name">
                    <div class="first-character">
                        ${firstChar}
                    </div>
                    <div class="show-name">
                        ${item.user}
                    </div>
                </div>
                <div class="comment-section">
                    <div class="comment-card">
                        <p>
                        ${item.comment}
                        </p>
                        <div class="comment-footer">
                            <div>
                                ${!item.positiveFeedBack ? `<i class="far fa-heart "></i>`:`<i class="fas fa-heart "></i>`} 
                            </div>
                            <div class="show-relies">reply 2</div>
                        </div>
                    </div>
                </div>
                </div>`
    }).join('');
    commentContainer.innerHTML = result;
    }
    // reset form
    function resetForm(){
        userValue.value = '';
        commentValue.value = '';
        positiveFeedBack = false;
        likeIcon.innerHTML = `<i class="far fa-heart"></i>`;
    }
    // count like
    function countLike(){
        if(positiveFeedBack === true) count++;
        countLikeBtn.textContent =count
    }
    // local storage
        // get local storage window
        function getLocalStorage(){
            let items;
            // check
            if(localStorage.getItem('items')=== null || !localStorage.getItem('items')){
                items =[]
            }else{
                items = JSON.parse(localStorage.getItem('items'));
            }
            let result= items.map(item =>{
                let firstChar = item.user.charAt(0);
                return`<div class="contain">
                        <div class="title-name">
                            <div class="first-character">
                                ${firstChar}
                            </div>
                            <div class="show-name">
                                ${item.user}
                            </div>
                        </div>
                        <div class="comment-section">
                            <div class="comment-card">
                                <p>
                                ${item.comment}
                                </p>
                                <div class="comment-footer">
                                    <div>
                                        ${!item.positiveFeedBack ? `<i class="far fa-heart "></i>`:`<i class="fas fa-heart "></i>`} 
                                    </div>
                                    <div class="show-relies">reply 2</div>
                                </div>
                            </div>
                        </div>
                        </div>`
            }).join('');
            commentContainer.innerHTML = result;
            // set back to local storage
            localStorage.setItem('items',JSON.stringify(items));
        }

        //save local storage
        function saveLocalStorage(item){
            // check
            let items;
            // check
            if(localStorage.getItem('items')=== null || !localStorage.getItem('items')){
                items =[]
            }else{
                items = JSON.parse(localStorage.getItem('items'));
            }
            items.push(item);
            localStorage.setItem('items',JSON.stringify(items));
            return items;
        }

//..................................................about.....................................
aboutBtn.forEach(about =>{
    about.addEventListener('click',(e) =>{
        let currentClass = e.currentTarget.classList[1];
        aboutBtn.forEach(btn=>{
            btn.classList.remove('choosen');
        })
        aboutArr.forEach(itemArr=>{
            if(itemArr.title === currentClass){
                e.currentTarget.classList.add('choosen');
                aboutContent.textContent = itemArr.content;
            }
        })
        
    })
})