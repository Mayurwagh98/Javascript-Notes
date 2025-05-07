### JS Engine

- JS engine has three major things
    a. Parsing
    b. Compilation
    c. Execution

### parsing
- parsing has few steps
    a. code gets broken down into tokens
      - `let a = 10` => this will be broken into tokens where `let`, `a`, `=`, `10` will all be tokens
    b. then `AST` which is a syntax parser, will generate the tree from those tokens

<img width="947" alt="Screenshot 2025-05-08 at 01 13 48" src="https://github.com/user-attachments/assets/592d281b-6b0f-4569-95e8-38e6550e9b66" />

<img width="1432" alt="Screenshot 2025-05-08 at 01 16 55" src="https://github.com/user-attachments/assets/38c366c9-ef64-46bd-bd4b-0de3f4764ae4" />

### compilation

- once the parsing phase done the code is then gets compile
- JS engine uses JIT (just in time) compilation
- which uses `Interpreter (Ignition interpreter)` & `Compiler (Turbofan compiler)` both
- Interpreter: parsed code to low level machine code, which can be understand by machine
- Complier: complies the interpreted code and optimizes it