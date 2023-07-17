// Function to include html popup code

function popuphtml() {
    let html = `<div id="popup">
    <span id="close" onclick='closepopup()'>
        <i class="fa-solid fa-circle-xmark" id="closearrow"></i>
    </span>
    <i class="fa-solid fa-circle-arrow-left" id="leftarrow"></i>
    <i class="fa-solid fa-circle-arrow-right" id="rightarrow"></i> 
    <img id="mainpopimg" src="https://images.unsplash.com/photo-1682685797406-97f364419b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="">
</div>`

let popdiv = document.createElement('div');
popdiv.innerHTML = html;
document.body.insertBefore(popdiv, document.body.firstChild)
}

// function to init plugin

let img;
let currimg;

function imgpopupinit(target) {

    // Select all images with calss target
    img = document.getElementsByClassName(target)

    // Add event listner on all selected images
    for (let i = 0; i < img.length; i++) {
        // Add Pointer
        img[i].style.cursor = 'pointer'

        // Add Event Listner
        img[i].addEventListener('click', function () {
            document.getElementById('mainpopimg').src = this.src;
            document.getElementById('popup').style.display = 'block';
            checkarrow()
            
        })
    }

    popuphtml()

    // Next Btn
    document.getElementById('rightarrow').addEventListener('click', function () {
        nextimg()
    })

    // Prev Btn
    document.getElementById('leftarrow').addEventListener('click', function () {
        previmg()
    })

}

// Close button
function closepopup() {
    document.getElementById('popup').style.display = 'none';
}

// Next Img
function nextimg() {
    getcurrimg()
    currrent++
    document.getElementById('mainpopimg').src = img[currrent].src
    checkarrow()

}

// Prev Img
function previmg() {
    getcurrimg()
    currrent--
    document.getElementById('mainpopimg').src = img[currrent].src
    checkarrow()
    
}


function getcurrimg() {
    for (let i = 0; i < img.length; i++) {
        if (img[i].src == document.getElementById('mainpopimg').src) {
            currrent = i;
        }
        
    }
}


function checkarrow() {
    getcurrimg();
    if (currrent == "0") {
        document.getElementById('leftarrow').style.display = 'none'
        document.getElementById('rightarrow').style.display = 'block'

    } else if (currrent == img.length - 1){
        document.getElementById('rightarrow').style.display = 'none'
        document.getElementById('leftarrow').style.display = 'block'

    }else{
        document.getElementById('leftarrow').style.display = 'block'
        document.getElementById('rightarrow').style.display = 'block'
    }
}


