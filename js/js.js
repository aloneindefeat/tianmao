window.onload=function(){
//轮播图
function chushan(img, dot, banner, active = "active", time = 2000) {
    // 获取元素
    let imgs = document.querySelectorAll(img);
    let dots = document.querySelectorAll(dot);
    
    let ban = document.querySelector(banner);
    // 定义下标
    let num = 0;
    // 设置图片默认显示第一张
    imgs[0].style.opacity = 1;
    // 设置轮播点默认显示第一个
    dots[0].classList.add(active);
    // 自动轮播
    let t = setInterval(move, time);

    function move() {
        num = num === imgs.length - 1 ? 0 : ++num;
        imgs.forEach((val, index) => {
            val.style.opacity = 0;
            dots[index].classList.remove(active);
        });
        imgs[num].style.opacity = 1;
        dots[num].classList.add(active);
    }

    // 点击轮播点，会出现对应的图片
    dots.forEach((val, index) => {
        val.onmouseout = () => {
            num = index - 1;
            move();
        };
    });
    //鼠标移入停止轮播
    ban.onmouseover = () => {
        clearInterval(t);
    };
    //鼠标移出继续轮播
    ban.onmouseout = () => {
        t = setInterval(move, time);
    };
    // 页面失去焦点时停止轮播
    onblur = () => {
        clearInterval(t);
    };
    // 页面获得焦点时继续轮播
    onfocus = () => {
        t = setInterval(move, time);
    };
}
chushan( ".banner-img",".dot",".banner-box")
//选项卡
function woceng(select1, select2) {
    let li = document.querySelectorAll(select1);
    let box = document.querySelectorAll(select2);
    // 鼠标移入select1，显示select2
    li.forEach((val, index) => {
        val.onmouseover = () => {
            box[index].style.display = "block";
        };
        val.onmouseout = () => {
            box[index].style.display = "none";
        };
    });
}
woceng(".banner-left li",".banner-left-box")
function tiaozhuan(btnbox,section, btn, back) {
    let btnboxs=document.querySelector(btnbox);
    let sec = document.querySelectorAll(section);
    let btns = document.querySelectorAll(btn);
    let backs = document.querySelector(back);
    window.onscroll = function () {//滚动条事件
        let windowTop = document.documentElement.scrollTop;//获取现在滚动条到顶端的距离
            if (windowTop >= window.innerHeight / 2) {
                btnboxs.style.opacity = 1;
            }
            else {
                btnboxs.style.opacity = 0;
            }
        }
    btns.forEach((val, index) => {
        val.onclick = () => {
            animate(document.documentElement, {scrollTop: sec[index].offsetTop});
        };
    });
    backs.onclick = () => {
        animate(document.documentElement, {scrollTop: 0});
    };
}
tiaozhuan(".open-bigbox",".open-box",".open",".open2")

}