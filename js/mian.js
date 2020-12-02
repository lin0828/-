var x = document.getElementById("tabs")
var y = x.getElementsByTagName("li")
var lists = document.getElementById("lists").getElementsByTagName("ul")
var seckillNav = document.getElementById("seckillNav")

console.log(lists)

for (let i = 0; i < y.length; i++) {
    y[i].onclick = showlist;
} //通过循环添加点击事件

function showlist() {
    for (let i = 0; i < y.length; i++) {
        if (y[i] == this) {
            y[i].className = "active";
            lists[i].className = "clearfix active"
        } else {
            y[i].className = "";
            lists[i].className = "clearfix"

        }

    }
}


window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop;
    if(scrollTop >= 260){
         //.seckill-navfixed .seckill-nav
         seckillNav.className = "seckill-navfixed seckill-nav"
    }else{
        //.seckill-nav
        seckillNav.className = "seckill-nav"
    }
    console.log(scrollTop)
}