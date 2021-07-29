class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
this.sling1 = loadImage("sprites/sling1.png")   
this.sling2 = loadImage("sprites/sling2.png")
this.sling3 = loadImage("sprites/sling3.png")

}


    fly(){
        this.sling.bodyA = null;
    
    }
    
    display(){
        image(this.sling1,180,25)
        image(this.sling2,150,25)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(77,36,13)
            strokeWeight(20);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}