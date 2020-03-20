class Dino{
    constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    //this.size = 50;
    
    this.gif = createImg("Trex.gif");
    }

    
    
    display(){
        
        this.gif.position(mouseX,mouseY);

       
       
    
    }
}