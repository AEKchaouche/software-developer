#include <iostream>
using namespace std;


// Array declaration by specifying size
int arr1[10];

// With recent C++ version we can also
// declare an array of user specofied size
int n = 10;
int arr2[n];

// Array declaration by initializing elements
int arr[] = {10, 20, 30, 40}

// Compilpier creates an array of size 4.
// above is the same as "int arr[4] = {10, 20, 30, 40]"


// Accessing Array Elements: 
int main()
{
    int arr[5];
    arr[0] = 5;
    arr[2] = -10;
    arr [3 / 2] = 6;    // this is same as arr[1] = 6
    arr[3] = arr[0];
    
    cout << arr[0] << " " << arr[1] << " " <<arr[2] << " " <<arr[3] ;
    return 0;
// Output  5 2 -10 5
}