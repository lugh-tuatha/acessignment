import java.util.Scanner;

class Person {
    String firstname;
    String lastname;
    String hobbies;
    char gender;
    int age;
}

public class Constructor {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Person p = new Person();
        int count = 0;
        while (count < 3) {
            System.out.println(" ");
            System.out.print("first name: ");
            p.firstname = scan.nextLine();
            System.out.print("last name: ");
            p.lastname = scan.nextLine();
            System.out.print("hobies: ");
            p.hobbies = scan.nextLine();
            System.out.print("gender: ");
            p.gender = scan.nextLine().charAt(0);
            System.out.print("age: ");
            p.age = scan.nextInt();
            scan.nextLine();
            System.out.println("Name: " + p.firstname + " " + p.lastname + " " + p.hobbies + " " + p.gender + " " + p.age );
            count++;
        }
    }
}
