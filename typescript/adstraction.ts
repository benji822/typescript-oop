// Define a interface of Shape, the Shape must have a method called area and perimeter
interface Shape {
  area(): number;
  perimeter(): number;
}

// implement the interface with class
class Circle implements Shape {
  /**
   *
   */
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  /**
   *
   */
  constructor(
    private width: number,
    private height: number,
  ) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// create a ultility function to expose the area of the shape
const calculateArea = (shape: Shape) => shape.area();

// Date Class
const date = new Date();

// Get Current Year
const currentYear = date.getFullYear();

// Get Current Month
const currentMonth = date.getMonth() + 1;

// Get Current Date
const currentDate = date.getDate();

// client code
function main() {
  const circle = new Circle(15);
  const rectangle = new Rectangle(10, 20);

  console.log(`Circle area: ${calculateArea(circle)}`);
  console.log(`Rectangle area: ${calculateArea(rectangle)}`);

  console.log(`Current Year: ${currentYear}`);
  console.log(`Current Month: ${currentMonth}`);
  console.log(`Current Date: ${currentDate}`);
}

export default main;
