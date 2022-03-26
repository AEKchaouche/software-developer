#include <iostream>
using namespace std;


int myFunction(int x) {
    return 5 + x;
    
}
int main() {
    cout << myFunction(3);
    return 0;
}

// This example returns the sum of a function with two parameters:

int myFunction(int x, int y) {
    return y + x;
    
}
int main1() {
    cout << myFunction(5, 3);
    return 0;
}


/*
Return Values
The void keyword, used in the previous examples, indicates that the function should not return a value. If you want the function to return a value, you can use a data type
(such as int, string, etc.) instead of void, and use the return keyword inside the function:
*/