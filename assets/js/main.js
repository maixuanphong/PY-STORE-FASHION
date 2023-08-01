const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const imgPositions = document.querySelectorAll('.slide_container img')
const slideContainer = document.querySelector('.slide_container')
let index = 0
const lengthImgs = imgPositions.length
const dotlist = $$('.dot-item')
const header = $('.header')


const app = {
    handleEvent() {
        Array.from(dotlist).forEach((item, indexDot) => {
            item.onclick = ()=> {
                index = indexDot
                this.changeSlide()
            }
        })

        window.onscroll = ()=> {
            const x = window.pageYOffset
            if(x>0) {
                header.classList.add('color--primary')
            }
            else {
                header.classList.remove('color--primary')
            }
        }

    },

    // giúp sắp xếp các ảnh nằm thành một chiều ngang nhờ thay đối thuộc tính left tăng dần
    flexSlide() {
        Array.from(imgPositions).forEach((img, index) => {
            img.style.left =  index * 100 + "%"
        } )
    },

    // thực hiện tăng index
    changeSlide() {
        if (index > lengthImgs-1) {
            index = 0
        }
        app.slider(index)
        index += 1
        
    },
     
    // thay đổi thuộc tính left để thẻ chứa các slide dịch dần sang trái
    // active và xóa active dot
    slider(index) {
        const dotActive = $('.active')
        slideContainer.style.left = "-" + index * 100 + "%"
        dotActive.classList.remove('active')
        dotlist[index].classList.add('active')
    },

    start: function() {
        this.flexSlide()
        setInterval(this.changeSlide, 3000)
        this.handleEvent()
    }//
}

app.start()

