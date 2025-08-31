// Import the Person class 
import person1 from "./person1.js";

class student1 extends person1 {
    constructor(name1, age, grade) {
        // Calling the parent class constructor  
        super(name1, age);
        this.grade = grade;
    }
    // Method to get the student's details
    getStudentDetails() {
        // Call the parent class method
        const parentDetails = super.getDetails();
        return parentDetails + `, Grade: ${this.grade}`;
    }
}

// Export the Student class
export default student1;