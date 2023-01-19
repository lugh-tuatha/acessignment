class method2 {
    public static void main(String[] args) {
        String name = "Ace Gabriel P. Pasiliao";
        int gradeLevel = 18;
        String section = "C#";

        System.out.println("name: " + name);
        System.out.println("grade level: " + gradeLevel);
        System.out.println("section: " + section);
        System.out.println("Welcome to my calculator");

        int a = 10;
        int b = 20;
        int product = product(a,b);

        int c = 10;
        int d = 5;
        int quotient = quotient(c,d);

        int e = 5;
        int f = 5;
        int sum = sum(e,f);

        int g = 2;
        int h = 10;
        int difference = difference(g,h);

        System.out.println("product: " + product);
        System.out.println("quotient: " + quotient);
        System.out.println("sum: " + sum);
        System.out.println("difference: " + difference);
    }
    public static int product(int a,int b) {
        return a*b;
    }
    public static int quotient(int c,int d) {
        return c/d;
    }
    public static int sum(int e,int f) {
        return e+f;
    }
    public static int difference(int g,int h) {
        return g-h;
    }
}
