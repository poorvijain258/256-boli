class ground{
    constructor(x,y,width,height){
     let options ={
         isStatic:true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(this.body,world);
    }

    }
   display();{
        groundobj = new ground(width/2,670,width,20);
        leftSide = new ground(1100,600,20,120);
        push();
        rectMode(CENTRE);
        rect(pos.x,pos.y,pos.width,pos.height);
         pop();
    }