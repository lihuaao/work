let call = document.querySelector(".call");
let canvel = document.querySelector(".cancel");
let ipt = document.querySelector(".ipt input");
let clear = document.querySelector(".clear");
let content = document.querySelector(".content ul");

// 返回上一页的点击事件
call.onclick = ()=>{
    location.href = "../index.html"
}
canvel.onclick = ()=>{
    location.href = "../index.html"
}


// 回车事件
ipt.onkeydown = (e)=>{
    if (e.keyCode == 13) {
        localStorage.getItem("list") || localStorage.setItem("list","[]");
        let item = JSON.parse(localStorage.getItem("list"));
        if (item.indexOf(ipt.value.trim()) == -1) {
            item.unshift(ipt.value.trim());
        }
        let itmStr = JSON.stringify(item);
        localStorage.setItem("list",itmStr);
        render();
        ipt.value = "";
    }
}

//点击后进行渲染
let render = ()=>{
    let data = JSON.parse(localStorage.getItem("list"))
    content.innerHTML = data.map((val,i)=>{
        return `<li>${val}</li>`
    }).join("")
    ipt.value = ""
} 
// 每次打开界面 进行判断并进行渲染
if (localStorage.getItem("list") != null) {
    render()
}

// 单个结果进行删除
content.onclick = (e)=>{
    let target = e.target;
    if (target.nodeName == "LI") {
        let cityArr = JSON.parse(localStorage.getItem("list"));
        cityArr.splice(cityArr.indexOf(target.innerHTML),1);
        localStorage.setItem("list",JSON.stringify(cityArr));
        target.remove();
    }
}

// 全部结果进行删除
clear.onclick = function () {
    localStorage.clear();
    content.innerHTML = "";
}