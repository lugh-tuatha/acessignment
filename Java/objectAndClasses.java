class Student {
    String name;
    int gradeLevel;
    String section;
    int id;
    public Student(String name, int gradeLevel, String section, int id) {
        this.name = name;
        this.gradeLevel = gradeLevel;
        this.section = section;
        this.id = id;
    }
}

public class objectAndClasses {
    public static void main(String[] args) {
        Student student1 = new Student("Ace Gabriel", 12, "C#", 383534);
        Student student2 = new Student("Mary Jairielle", 12, "PHP", 686769);

        System.out.println("Student 1:");
        System.out.println("Name: " + student1.name);
        System.out.println("Grade level: " + student1.gradeLevel);
        System.out.println("Section: " + student1.section);
        System.out.println("ID: " + student1.id);

        System.out.println("Student 2:");
        System.out.println("Name: " + student2.name);
        System.out.println("Grade level: " + student2.gradeLevel);
        System.out.println("Section: " + student2.section);
        System.out.println("ID: " + student2.id);
    }
}


