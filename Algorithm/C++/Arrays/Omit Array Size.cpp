#include <iostream>
#include <string>

using namespace std;

// Omit Array Size

// ou don't have to specify the size of the array. But if you don't, it will only be as big as the elements that are inserted into it:
string cars[] = {"Volvo", "BWM", "Ford"};

// however you want extra space for future elements. Then you have to overwrite the existing values:

string cars[] = {"Volvo", "BWM", "Ford", "Mazda", "Tesla"};



string cars[5] = {"Volvo", "BMW", "Ford"}; // size of array is 5, even though it's only three elements inside it

// Omit Elements on Declaration

int main() {
    string cars[5];  // declare an array without specifying the elements on declaration, and add them later:
    cars[0] = "Volvo";
    cars[1] = "BWM";
    cars[2] = "Ford";
    cars[3] = "Mazda";
    cars[4] = "Tesla";
    for (int i = 0; i < 5; i++)
    {
        cout << cars[i] << "\n";
    }

    return 0;
    
}