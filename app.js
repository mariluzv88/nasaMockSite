let count = 0
let banners = [
    "https://www.nasa.gov/sites/default/files/styles/card_page_banner/public/thumbnails/image/ccp-web-banner-102720.jpg",
    "https://www.nasa.gov/sites/default/files/styles/card_page_banner/public/thumbnails/image/dses-banner-01.jpg",
    "https://www.nasa.gov/sites/default/files/styles/card_page_banner/public/thumbnails/image/hubble_banner_copy.png",
    "https://www.nasa.gov/sites/default/files/styles/card_page_banner/public/thumbnails/image/webb_banner_3_forcms.jpg",
    "https://www.nasa.gov/sites/default/files/styles/card_page_banner/public/juno_nasabanner.jpg",
    "https://www.nasa.gov/sites/default/files/styles/card_page_banner/public/thumbnails/image/iss_banner_20220404_2.png",
    "https://www.nasa.gov/sites/default/files/styles/card_page_banner/public/thumbnails/image/lbfd-banner-new_0.jpg",
    "https://www.nasa.gov/sites/default/files/styles/card_page_banner/public/missions-banner.jpg",
    "https://www.nasa.gov/sites/default/files/styles/card_page_banner/public/thumbnails/image/explore-solar-system-and-beyond.png",
    "https://www.solarsystemscope.com/images/background_footer_bottom.jpg"
]
let box = {
    sun:{
        text: "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core. The Sun radiates this energy mainly as light, ultraviolet, and infrared radiation, and is the most important source of energy for life on Earth.",
        EquatorCircumference:" Equator circumference: 4,379,000km  ",
        Radius:" Radius: 695,700km",
        Temperature: "Temperature: 5,973°C to 15,000,000°C",
        AverageSpeed:" Average orbital speed around the Milky Way: 720,000km/h (200km/s)",
        StarType:" Star type: Yellow dwarf",
        AverageTimeRotate:" Average time taken to rotate on axis: 27 Earth days" 
    }
}


const bannerSlide = ()=>{
    count++
    let banner = document.querySelector('.banImg')
    banner.setAttribute('src',banners[count])
}


const bannerBack = () => {
    count--
    let banner  = document.querySelector('.banImg')
    banner.setAttribute('src',banners[count])
}

const fly = ()=>{
    let spaceShip = document.querySelector('.rocket')
    spaceShip.classList.toggle(rocketFLy)
}

const  popInfo = () =>{
    let txtInfo = document.querySelector('.solarContainer')
    
    txtInfo.classList.toggle('box')
    
    txtInfo.replaceWith(box.sun.text,box.sun.EquatorCircumference,box.sun.Radius,box.sun.StarType,box.sun.Temperature,box.sun.AverageSpeed,box.sun.AverageTimeRotate)
    
}
const showInfo = ()=>{
    popInfo()
    let info = document.querySelector('body')
    info.style.color = "yellow"
    info.style.fontSize="50px"
}

const onMoon = () =>{
    let human = document.querySelector('.moonWalker')
    human.classList.toggle('hop')
}

const shrinkOut = () =>{
    let goAway = document.querySelector('.nasa')
    goAway.classList.toggle('shrink')
}


