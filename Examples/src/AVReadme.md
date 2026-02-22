What are the benefits of using TypeScript in automation projects?

TypeScript catches errors before execution. Check example ex0003_Interface.

Strongly Typed API Responses:
Check example ex0003_Interface.

Better IntelliSense & Developer Productivity

Safer Refactoring:
If you rename a function:

function loginUser() {}
TypeScript updates references safely.
In large automation frameworks (500+ test files), this is critical.

Large automation projects suffer from:

Utility sprawl
Repeated selectors
Incorrect test data shapes
type Environment = "QA" | "UAT" | "PROD";






What is Static Typing?
The data type of a variable is checked at compile time, not at runtime.

How Static Typing Helps in Test Automation
Prevents Flaky Tests
interface LoginResponse {
  token: string;
  userId: number;
}
token: number  // ❌ compile error

Strong API Contract Validation
const response: LoginResponse = await api.login();

Better Page Object Model Safety
class LoginPage {
  async login(username: string, password: string): Promise<void> {}
}

login(123, true);

Safe Refactoring in Large Frameworks


What is Type Inference?
TypeScript automatically detects the type of a variable without you explicitly specifying it.



What is the difference between interface and type

An interface is used to define the structure of an object.
interface User {
  id: number;
  name: string;
}

A type alias can define:

Object shapes

Union types

Primitive aliases

Function types

Tuples

Intersections


What is a Union Type
A union type means:
A value can be one of multiple types.
It uses the | (pipe) symbol.


What is an Intersection Type? & 

type User = {
  name: string;
};

type Admin = {
  role: string;
};

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Abhay",
  role: "SuperAdmin"
};

What is Type Assertion?

let value: unknown = "Hello";

//if(typeof value=='string')
let length = (value as string).length;
let length = (<string>value).length;

Type Assertion Is NOT Type Conversion
let value = "123" as number; // ❌



What are Generics? Give a real automation example.

What is keyof operator?

What is typeof in TypeScript?

What are mapped types?

What are conditional types?

What is utility type? Name commonly used ones.

Explain Partial<T>, Required<T>, Readonly<T>.

What is Record<K, T>?

What is Pick and Omit?

What is ReturnType<T>?



