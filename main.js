// event window loading
var loadingScreen = document.querySelector('.loading-screen')
var loadingBar = document.querySelector('.loading-bar__loading')
window.onload = function() {
    loadingBar.style. animation = 'loading 3s ease-out forwards'
    setTimeout(function() {
        loadingScreen.classList.add('fadeOut')
    },4000)
}

// animation for home>p
var p1 = document.querySelector('.main .home >p:nth-child(3)') 
var p2 = document.querySelector('.main .home >p:nth-child(4)')
setInterval(
    function() {
        if(p1.closest('.hide')){
            p1.classList.remove('hide')
            p2.classList.add('hide')
        } else if(p2.closest('.hide')) {
            p2.classList.remove('hide')
            p1.classList.add('hide')
        }
    },
2000)

// input phần contact
var inputs = document.querySelectorAll('.info__item>input')
var inputPLD
inputs.forEach(input => {
    input.onfocus = function() {
        inputPLD = input.getAttribute('placeholder')
        input.setAttribute('placeholder','')
        input.parentElement.querySelector('span').style.color = '#04b4e0'
        input.style.borderColor = '#04b4e0'
    }
    
    input.onblur = function() {
        input.setAttribute('placeholder',inputPLD)
        input.parentElement.querySelector('span').style.color = 'transparent'
        input.style.borderColor = '#999'
    }
})

// Setup sidebar
var allItemSideBar = document.querySelectorAll('.sidebar__item')
var mainItem = document.querySelectorAll('.main-item')
console.log(mainItem)
allItemSideBar.forEach((item,index) => {
    item.onclick = function() {
        document.querySelector('.sidebar__item.active').classList.remove('active')
        item.classList.add('active')
        mainItem.forEach((item2,index2) => {
            if (index === index2 ) { 
                // find the item which dont have 'display-none' class
                mainItem.forEach((item2) => {
                    if (item2.classList.length<2) {
                        item2.classList.add('display-none')
                    }
                })
                item2.classList.remove('display-none')
            }
        })
    }
})

// Set event for mobile
var itemsMobile = document.querySelectorAll('.personal-mobile .menu-mobile>li')
var check = document.getElementById('check')
itemsMobile.forEach((item,index) => {
    item.onclick = function() {
        document.querySelector('.personal-mobile .menu-mobile>li.active-mobile').classList.remove('active-mobile')
        item.classList.add('active-mobile')
        mainItem.forEach(function(item2,index2) {
            if (index == index2) {
                mainItem.forEach((item2) => {
                    if (item2.classList.length<2) {
                        item2.classList.add('display-none')
                    }
                })
                item2.classList.remove('display-none')
            }
        })
        check.checked = false
    }
})
console.log(check.checked )