# FurniCraft

## Overall Info
- **This is my SoftUni project for the exam! This is an app called FurniCraft for buying and selling furniture. The server i used is the SoftUni practice server not mine!**


## Run the Project
1. **Install the Dependencies**
- Open an integrated terminal in the client folder and type this:
```bash
npm install
```

2. **Run the Server**
- Open an integrated terminal in the server folder and type this:
```bash
node server
```

3. **Run the Client**
- Open an integrated terminal in the client folder and type this:
```bash
npm run dev
```

## Tech Stack

### **Frontend**
- **React**
- **React Router**
- **Tailwind CSS + AI (this is for the design)**
- **Motion Frame (this is for the animations)**

### **Backend (not done by me)**
- **Node.js**

## Functionality 
1. **Authentication (register, login, logout)**
2. **Dynamic navigation (guest, user)**
3. **Home page (Access: guests, users)**
4. **About page that you can see detailed info for every person (Access: guests, users)**
5. **Contacts page (Access: guests, users)**
6. **Catalog page with search, pagination and sorting (Access: guests, users)**
7. **Details view page for every furniture with recommended furniture from the same category(Access: guests, users)**
8. **Create furniture page (Access: users)**
9. **Profile page that you can see your posts and orders (Access: users)**
10. **Edit component that appears inside the details view (Access: post owners)**
11. **Delete component that appears inside the details view (Access: post owners)**
12. **Order page (Access: users that are not owners)**
13. **Not found page (Access: guests, users)**

## Notes
- **I used 2 collections for this project - furniture, orders**
- **All the restricted pages got route guards**
- **Most of the async pages and components got loading spinners**
- **Most of the pages got animations**
- **Good error handling with a component appearing on the top of the screen**
- **Error handling for empty forms**
- **I used a provider that gives a context to the routes for the user info!**