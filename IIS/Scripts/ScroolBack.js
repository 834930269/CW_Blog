function ScrollBack() {
    var obtn = document.getElementById('scrollback');
    var height = document.documentElement.clientHeight;//鑾峰彇鍙鍖哄煙楂樺害
    var timer = null;
    window.onscroll = function () {
        var a = true;
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;//鑾峰彇婊氬姩鏉＄殑浣嶇疆锛岃繑鍥炴暟鍊�,,璋锋瓕鏀寔鍚庨潰鐨�
        if (osTop >= (0)) {
            obtn.style.display = "block";
        } else {
            obtn.style.display = "none";
        }
        if (!a) {
            clearInterval(timer);
        }
    }
    obtn.onclick = function () {
        //璁剧疆瀹氭椂鍣�
        timer = setInterval(function () {
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;//鑾峰彇婊氬姩鏉＄殑浣嶇疆锛岃繑鍥炴暟鍊�,,璋锋瓕鏀寔鍚庨潰鐨�
            var speed = Math.floor(-osTop / 6);

            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;

            if (osTop == 0) {
                clearInterval(timer);
            }
        }, 30)//鍔ㄧ敾锛屽畾鏃跺櫒	
    }
}
ScrollBack();
