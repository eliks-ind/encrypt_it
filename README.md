# encrypt_it

## Text Encrypter/Decrypter

### How it works?

As you can see we add 2 units to the character code

```js
const encrypt = () => {
    let b = String.fromCharCode(text.charCodeAt(i) + 2);
  }
```
When decrypting, we vice versa subtract 2 units

```js
const decrypt = () => {
    let b = String.fromCharCode(text.charCodeAt(i) - 2);
  }
```

## Prerequisites
- [Node.js](https://nodejs.org/) (v12.x or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

## Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/eliks-ind/encrypt_it.git
    cd encrypt_it
    ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Run the server:**
    ```bash
    npm start
    ```