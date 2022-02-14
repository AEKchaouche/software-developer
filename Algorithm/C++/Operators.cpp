#include <iostream>
using namespace std;


int main() {
    int x = 100;
    int y = 50;
    int z = 10;

    // Arithmetic Operators
    cout << x * y * z  <<endl;              // Multiplication
    cout << x + y <<endl;                   // Addition
    cout << x - z <<endl;                   // Subraction
    cout << x / y <<endl;                   // Division
    cout << x % y <<endl;                   // Modulus
    cout << ++z   <<endl;                   // Increment 
    cout << --y <<endl;                     // Decreases 


    // Assignment Operators
     x += 3;
     cout << x;
     
return 0;

    /*
    
    x = 100;                               // Same as : x = 100  (Operator +=)
    x += 3;                                // Same as : x = x + 3  (Operator +=)
    x -= 3;                                // Same as : x = x + 3  (Operator +=)
    x *= 3;                                // Same as : x = x + 3  (Operator +=)
    x /= 3;                                // Same as : x = x + 3  (Operator +=)
    x %= 3;                                // Same as : x = x + 3  (Operator +=)
    x &= 3;                                // Same as : x = x + 3  (Operator +=)
    x |= 3;                                // Same as : x = x + 3  (Operator +=)
    x ^= 3;                                // Same as : x = x + 3  (Operator +=)
    x >>= 3;                               // Same as : x = x + 3  (Operator +=)
    x <<= 3;                               // Same as : x = x + 3  (Operator +=)
     
     */    

}


