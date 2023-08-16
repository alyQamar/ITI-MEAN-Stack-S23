// Q2
class Point2D {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  calculateDistance(otherPoint: Point2D): number {
    const dx = this.x - otherPoint.x;
    const dy = this.y - otherPoint.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

// Q3
class Point3D extends Point2D {
  z: number;

  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  calculateDistance(otherPoint: Point3D): number {
    const dx = this.x - otherPoint.x;
    const dy = this.y - otherPoint.y;
    const dz = this.z - otherPoint.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }
}

// Test the classes
const point1 = new Point2D(0, 0);
const point2 = new Point2D(3, 4);
console.log(
  `Distance between Point1 and Point2: ${point1.calculateDistance(point2)}`,
);

const point3 = new Point3D(1, 2, 3);
const point4 = new Point3D(4, 5, 6);
console.log(
  `Distance between Point3 and Point4: ${point3.calculateDistance(point4)}`,
);
