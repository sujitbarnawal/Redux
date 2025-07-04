# 🧠 Learning Redux Toolkit – State Management Journey

This repository documents my learning journey of **Redux Toolkit** for modern and efficient state management in React applications. I practiced with multiple projects to understand the core concepts and application structure.

---

## 📁 Projects

### 1. `counter-with-redux`

🔢 A basic **counter app** built to understand the foundational concepts of Redux Toolkit:

- ✅ Setting up and configuring the Redux **store**
- ✅ Creating a **slice** with reducers and actions
- ✅ Using **Provider** to inject the store into the app
- ✅ Accessing state using `useSelector` and updating state using `useDispatch`

> This project gave me a strong introduction to Redux Toolkit with a simple and clear use case.

---

### 2. `create-post-redux`

📝 A simple **post creation app** that goes one step further to show real-world usage:

- 🏗️ Project structure with multiple components and modular code  
- 🔁 Understanding **data flow** in Redux: from user input to state and UI  
- 📦 Managing state in a centralized way for better maintainability  
- ✨ Demonstrates how Redux logic and UI logic can be separated

> This project helped me learn how to structure Redux code properly in a real application.

---

### 3. `create-post-redux-thunk`

🔄 A more advanced version of the **post creation app**, using **asynchronous logic** with Redux Toolkit's `createAsyncThunk`:

- 🌐 Used **fake APIs** (or real APIs) to fetch and submit data  
- 🚦 Managed different states: `loading`, `succeeded`, `failed`  
- 🔁 Understood how **side effects** like API calls fit into Redux's unidirectional data flow  
- 🔄 Updated UI based on async response using Redux state

> This project solidified my understanding of handling asynchronous operations with Redux Toolkit.

---

### 4. `blog-app-redux`

📰 A **blog application** demonstrating full **CRUD functionality** using Redux Toolkit:

- ✍️ **Create**, 🧾 **Read**, 🛠️ **Update**, and ❌ **Delete** blog posts  
- 🧩 Modular Redux slices to manage posts and user interactions  
- 🔃 Showcased effective use of `useDispatch`, `useSelector`, and conditional rendering  
- 🧠 Learned to maintain a clean Redux structure for dynamic, state-driven UIs

> This project helped me implement full data manipulation with Redux Toolkit and strengthened my confidence in building complex, interactive apps.

---

## 🚀 What I Learned

- ✅ Core Redux Toolkit concepts: `createSlice`, `configureStore`  
- ✅ Dispatching actions and selecting state  
- ✅ Organizing code in scalable architecture  
- ✅ Understanding unidirectional data flow  
- ✅ Importance of state centralization for predictable behavior  
- ✅ **Handling async operations** using `createAsyncThunk`  
- ✅ Managing loading and error states cleanly in Redux  
- ✅ Performing **CRUD operations** using Redux state management

---

## 🛠️ Tech Stack

- ⚛️ React  
- 📦 Redux Toolkit  
- 🔁 React-Redux  

---

Thanks for checking out my Redux learning journey!  
Feel free to ⭐ the repo if you found it helpful.
