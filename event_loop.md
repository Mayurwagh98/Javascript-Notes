### flow of event loop
<img width="1189" alt="Screenshot 2025-05-07 at 18 15 42" src="https://github.com/user-attachments/assets/cfc60298-3ac0-474f-9203-f8718b4b5110" />

- event loop keeps the track if there's any function waiting in callback queue to be executed, if so it sends it to call stack
  
  <img width="1331" alt="Screenshot 2025-05-07 at 18 26 45" src="https://github.com/user-attachments/assets/6768401e-efb0-4893-a53b-9c330ff66c68" />

### event listener example
  
<img width="1304" alt="Screenshot 2025-05-07 at 18 38 17" src="https://github.com/user-attachments/assets/2f7ce2c0-7655-4257-a7d9-e97b010c5660" />

### api fetching flow
- when it comes to api fetching, event loop flow is different
- A new queue comes into the picture which is `microtask queue`
- this is a priority task queue, if any function is present in this queue, then it will be sent to call stack before callback queue

<img width="1322" alt="Screenshot 2025-05-07 at 18 52 15" src="https://github.com/user-attachments/assets/07c8003a-8360-4a1e-96f4-2d5399cfe5fe" />

