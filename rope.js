class rope{
    constructor(body1,body2,ptx) {

      var opt={
         bodyA:body1,
         bodyB:body2,
         //pointB: {x:this.offsetX, y:this.offsetY}
         
      }

      this.con = Matter.Constraint.create(opt);
      World.add(world,this.con);

      this.posx = ptx
    }
    display() {
        
        line(this.con.bodyA.position.x,this.con.bodyA.position.y,this.con.bodyB.position.x+this.posx,
            this.con.bodyB.position.y)
    }
}