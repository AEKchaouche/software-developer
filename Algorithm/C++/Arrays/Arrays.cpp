#include <iostream>
#include <string>

using namespace std;

// To declare an array, define the variable type, specify the name of the array followed by square brackets and specify the number of elements it should store:

// string cars[4];

int main() {
    string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
    for (int i = 0; i < 4 ; i++) {
        cout << cars[i] << "\n";
    }

    return 0;
}