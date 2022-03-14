#include <iostream>
#include <string>
using namespace std;

void myFunction(string country = "Norway") {             // a default parameter value, by using the equals sign (=).

    cout << country << "\n";
}

int main() {
    myFunction("Sweden");
    myFunction("India");
    myFunction();                    // If we call the function without an argument, it uses the default value ("Norway"):
    myFunction("USA");


  return 0;
}

// Sweden
// India
// Norway               default value ("Norway"):
// USA



