#include <iostream>
#include <string>
using namespace std;

int main() {
    string fristname ="John";
    string lastname "Doe";
    string fullname = fristname + lastname ;  // The + operator can be used between strings to add them together to make a new string. This is called concatenation
    cout << fullname;

    return 0;
}

// C++ Numbers and Strings
int main1() 
{
    int x = 10 ;
    int y = 20;
    int z = x + y;   // Numbers are added. Strings are concatenated.
    cout << z;       // z will be 30 (an integer)
    return 0;      
}   

// C++ Access Strings

int main2() {
  string myString = "Hello";
  cout << myString[1];      // You can access the characters in a string by referring to its index number inside square brackets []
  return 0;
}
