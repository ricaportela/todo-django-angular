# Angular-Django Todo App 🚀

## Overview

This project demonstrates a simple todo list application built with Angular for the frontend and Django with Django Rest Framework for the backend. It allows users to view a list of todos retrieved from the backend API.

## Backend Setup

1. **Django Setup:**
   - Create a Django project and app.
   - Define a Todo model in `todo_app/models.py`.
   - Migrate the database.
   - Create a serializer in `todo_app/serializers.py`.
   - Create a view in `todo_app/views.py`.
   - Set up a URL route in `todo_app/urls.py`.
   - Include the app's URLs in the project's `urls.py`.
   - Run the development server.

   Your API should be accessible at `http://127.0.0.1:8000/api/todos/`.

## Frontend Setup

2. **Angular Setup:**
   - Create a new Angular project.
   - Generate a service for handling API calls.
   - Update the service to make HTTP requests.
   - Create a todo model.
   - Update the `app.component.ts` file to fetch and display todos.
   - Update the HTML template to display the todo list.

   Your Angular app should be accessible at `http://localhost:4200/`.

## Run the Project

1. **Run Django Server:**
   ```bash
   python manage.py runserver
   ```

2. **Run Angular Development Server:**
   ```bash
   ng serve
   ```

   Open your browser and navigate to `http://localhost:4200/` to see the todo list in action.

## Additional Features

Feel free to expand the project by adding features like creating, updating, and deleting todos. Customize and enhance it based on your requirements.

## Contributing 🤝

Contributions are welcome! If you have ideas for improvements or new features, please open an issue or submit a pull request.

## License 📝

This project is licensed under the [MIT License](LICENSE).