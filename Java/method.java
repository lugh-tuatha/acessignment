import java.util.Scanner;
public class method {
    public static void main (String []args){

        Scanner sc = new Scanner (System.in);
        int num1, num2, result;

        System.out.print("Enter Num 1:");
        String a = sc.nextLine();
        num1 = Integer.parseInt(a);

        System.out.print("Enter Num 2:");
        a = sc.nextLine();
        num2 = Integer.parseInt(a);
        result = num1 * num2;
        System.out.println("Result: " + result);
    }

}


