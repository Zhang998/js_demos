function outJs() {
    d += 2;
    console.log(d);
    // console.afd('adsf')
    outJs2()
    
}
function outJs2(params) {
    console.trace('调用栈');    //查看调用栈
    setTimeout(() => {
        console.log('123');
        
    }, 1000);
    
}