#include <iostream>
#include <string>
using namespace std;


void myFunction(string fname) {               // a string called fname as parameter.
    cout << fname << "Resfnes\n";
}

int main() {
    myFunction("Liam ");                      // Liam, Jenny and Anja are arguments.
    myFunction("Jenny ");
    myFunction("Anja ");

    return 0;
}


/* Syntax
void functionName(paramteer1, parameter2,) {
    code to be excuted
}
*/
