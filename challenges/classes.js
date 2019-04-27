// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {
    constructor(dimension) {
       this.length = dimension.length;
        this.width = dimension.width;
        this.height = dimension.height; 
    }
    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    } 
}

class CubeMaker extends CuboidMaker {
    constructor(dimension) {
        super(dimension);
        this.side = dimension.side;       
    }
    volume() {
        return Math.pow(this.side,3);
    }
    surfaceArea() {
        return 6* Math.pow(this.side,2);
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
});

const cube = new CubeMaker ({
    side: 4
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

//This is not a very good example because you don't need to use anything from the parent at all.

console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96
