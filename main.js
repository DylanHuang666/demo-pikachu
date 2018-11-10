!function(){
    var duration=40
    $('.actions').on('click','button',function(e){
        let $button=$(e.currentTarget)
        let speed=$button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration=100
                break
            case 'normal':
                duration=40
                break
            case 'fast':
                duration=10
                break
        }
    })

    let code=`/*画一只皮卡丘*/
.preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fee433;
}
.wrapper {
    width: 100%;
    height: 181px;
    position: relative;
}

/*鼻子*/
.nose {
    width: 0px;
    height: 0px;
    border: 10px solid;
    border-color: black transparent transparent;
    border-radius: 10px;
    border-width: 8px 10px;
    position: absolute;
    left: 50%;
    top: 26px;
    margin-left: -10px;
}

/*眼睛*/
.eye {
    width: 49px;
    height: 49px;
    border-radius: 50%;
    border: 2px solid black;
    background: #2e2e2e;
    position: absolute;
}
.eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    left: 6px;
    top: -1px;
}
.eye.left {
    right: 50%;
    margin-right: 66px;
}
.eye.right {
    left: 50%;
    margin-left: 66px;
}

/*脸部腮红*/
.face {
    width: 68px;
    height: 68px;
    background: #fc0d1c;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 84px;
}
.face.left {
    right: 50%;
    margin-right: 93px;
}
.face.right {
    left: 50%;
    margin-left: 93px;
}

/*上嘴唇*/
.upperLip {
    width: 64px;
    height: 19px;
    border: 2px solid black;
    position: absolute;
    background: #fee433;
}
.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 19px;
    border-top: none;
    border-right: none;
    transform: rotate(-25deg);
    top: 50px;
}
.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 19px;
    border-top: none;
    border-left: none;
    transform: rotate(25deg);
    top: 50px;
}

/*下嘴唇*/
.lowerLip-wrapper {
    height: 126px;
    width: 300px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -150px;
    overflow: hidden;
}
.lowerLip {
    width: 104px;
    height: 2000px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -52px;
    border: 2px solid black;
    border-radius: 300px/1450px;
    background: #990513;
    overflow: hidden;
}

/*舌头*/
.lowerLip::after {
    content: '';
    display: block;
    width: 110px;
    height: 110px;
    position: absolute;
    bottom: -10px;
    background: #fc4a62;
    border-radius: 50%;
    left: 50%;
    margin-left: -55px;
}
/*皮卡丘*/`

    writeCode('',code)

    function writeCode(prefix,code,fn){
        let container=document.querySelector('#code')
        let styleTag=document.querySelector('#styleTag')
        let n=0
        setTimeout(function run(){
            n+=1
            container.innerHTML=Prism.highlight(prefix+code.substring(0,n), Prism.languages.css, 'javascript')
            styleTag.innerHTML=code.substring(0,n)
            container.scrollTop=container.scrollHeight
            if(n<code.length){
                setTimeout(run,duration)  
            }else{
                fn.call()
            }
        },duration)
    }
}.call()