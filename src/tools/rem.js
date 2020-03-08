function Rem(){
    let width=document.documentElement.clientWidth;
    let fontSize=width/20;
    document.documentElement.style=`font-size:${fontSize}px`
}
Rem();