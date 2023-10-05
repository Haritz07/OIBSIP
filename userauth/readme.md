Hello. I am THE_Haritz.

```markdown
# User Authentication with Express and Passport.js

This is a simple Node.js application that demonstrates user authentication using Express.js and Passport.js. Users can register, login, and logout with secure password hashing.

## Features

- User registration with hashed password storage
- User login and session management
- Password validation and error handling
- Flash messages for success and error notifications
- Upon  successful login, user wil be redirected to a secure page (an Home Page for a Game I'm working on 🤫)

## Requirements

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/your-auth-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-auth-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Configure your environment variables:

   Create a `.env` file in the project root and add the following variables:

   ```env
   PORT=3000
   SESSION_SECRET=your_session_secret_here
   ```

   Replace `your_session_secret_here` with a secret key for session management.

5. Start the application:

   ```bash
   npm start
   ```

6. Open your web browser and visit `http://localhost:3000` to access the application.

## Usage

- **Register**: Visit the registration page (`/register`) to create a new user account.
- **Login**: Visit the login page (`/login`) to log in with your registered account.
- **Logout**: Click the "Logout" button to log out and end the session.
- **Error Handling**: The application handles errors such as invalid credentials or missing fields and displays flash messages to the user.

## Customization

You can customize this application to fit your specific needs:

- **Database Integration**: If you want to store user data in a database, consider integrating a database like MongoDB or PostgreSQL. Update the user data handling functions in `passport-config.js` accordingly.

- **Styling**: Customize the CSS styles in the `public` folder to match your application's design.

- **Routes**: Define additional routes or functionality as needed by modifying the Express router in `server.js`.

## Contributing

Contributions are welcome! If you have any improvements or suggestions, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


This README.md file provides an overview of the project, installation instructions, usage guidelines, customization options, and more. You can replace placeholders like `yourusername`, `your-auth-app`, and `your_session_secret_here` with your own project-specific information. Additionally, make sure to include any specific instructions or details relevant to your application.

## Errors

I enjoyed every bit of this project as it was an interesting challenge. I unfortunately haven't been able to proerly implement the error messages yet, instead if your login credentials are incorrect or if such credentials already exist, you wouldn't be able to move past the "/login" page. 😅
Also, the Logout functionality isn't "Functional" yet. 😅 All will be sorted soon.
``````

