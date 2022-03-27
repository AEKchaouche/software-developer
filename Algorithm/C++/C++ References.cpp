#include <iostream>
#include <string>
using namespace std;

// A reference variable is a "reference" to an existing variable, and it is created with the & operator:

int main() {
    string food = "Pizza";     // food variable
    string &meal = food;       // reference to food


// we can use either the variable name food or the reference name meal to refer to the food variable:

    cout << food << "\n";    // Outputs Pizza
    cout << meal << "\n";    // Outputs Pizza

    return 0;
}