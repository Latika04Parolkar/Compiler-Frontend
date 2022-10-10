const stubs = {};

stubs.cpp = `#include <iostream>
using namespace std;
int main() {
    cout << "Hello World!";
    return 0;
}
`;

stubs.py = `print("Hello World!")`;

stubs.java = `// "main" method must be in a class "Compiler".
class Compiler {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}`;

export default stubs;