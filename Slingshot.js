class Slingshot{
    constructor(bodyA,pointB){
        var options={
    bodyA:bodyA,
    pointB:pointB,
    length:10,
    stiffness:0.5
        }
        //this.pointB=this.pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);

        
    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}