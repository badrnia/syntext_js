class Badr{
    constructor(width,hight){
        this.widthh=width;
        this.hightt=hight;
    }
    badrnia(){
        console.log(this.hightt,this.widthh);
    }
}
class M_Badrnia extends Badr{
    constructor(widthh ,hightt ,color){
        super(widthh,hightt);
        this.colorr=color;
    }
        show(){
            return"<div style='width:"+this.widthh+"px;hight:"+this.hightt+"px;background:"+this.colorr+"'></div>"
        }
    
}
var obj=new M_Badrnia(100,200,"red");
document.getElementById("myDiv").innerHTML=obj.show()



