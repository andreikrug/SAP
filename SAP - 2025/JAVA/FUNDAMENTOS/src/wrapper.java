public class wrapper {
    public static void main(String args[]){
       int a = (6*(3+2));
       int exp = (int) Math.pow(a, 2);
       int b = 3 * 2 ;
       int divide = exp / b;

       int c = (1-5) * (2-7);
       int divide2 = c / 2;
       int exp2 = (int) Math.pow(divide2, 2);
       int d = (divide - exp2);
       int exp3 = (int) Math.pow(d, 3);
       int exp4 = (int) Math.pow(10, 3);
       int result = exp3 / exp4;
       System.out.println(c);
        System.out.println(divide2);
       System.out.println(exp2);
       System.out.println(result);
    }
}
