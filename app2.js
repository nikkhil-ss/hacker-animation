let no = 42;
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1243245346475487568679497653sdfgservghwrb jwrbh  ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
setInterval(function () {
    for (let index = 0; index < no; index++) {
        let ele = document.createElement('h3');
        ele.innerHTML = makeid(1);
        ele.style.position = "absolute";
        ele.style.left = 10 + index * 20 + "px";
        let dif = 0
        let opacity = 1;
        // ele.style.color = `rgb(${100 * Math.random()},${100 * Math.random()},${100 * Math.random()})`
        ele.style.color="#0a6443"
        let x = setInterval(function () {
            dif += 5;
            opacity -= 0.006;
            ele.style.top = dif + "px";
            ele.style.opacity = opacity;
            if (dif > 850) {
                ele.remove();
                clearInterval(x);
            }

        }, 16)
        document.body.appendChild(ele)
    }

}, 200)

