class Drops {
    constructor(x, y){

        var options={
			//isStatic: false,
            friction: 0.1
	       }

        this.rain = Bodies.circle(x, y, 10, options)
        this.radius= 10
        World.add(world, this.rain);
    }

    update() {
         if (this.rain.position.y> height) {
            Matter.Body.setPosition(this.rain, {x: this.rain.position.x, y: this.rain.position.y})
         }
       }
    
    display () {
        /*for(var i= 0; i<maxDrops; i++) {
            drops.push(new Drops (random(0, 400), random(0, 400)))
           }*/
        push()
        translate(this.rain.position.x, this.rain.position.y);
        ellipse(0, 0, this.radius)
        /*for(var i=0; i<this.trajectory.length; i++){
            image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
          }*/
          
        pop()
    }
}