# Employee Management System

A comprehensive full-stack employee management system built using **Angular** (frontend) and **ASP.NET Core** (backend). This project demonstrates a modern web architecture with containerized deployment using Docker and Docker Compose.

---

## 📁 Project Structure

```
employeeManagement/
├── frontend/                 # Angular frontend application
│   └── employee-management-app/
│       ├── src/             # Source files
│       ├── Dockerfile       # Frontend Docker configuration
│       └── nginx.conf       # Nginx configuration for serving Angular app
├── backend/                 # ASP.NET Core backend application
│   └── EmployeeManagement/
│       ├── Controllers/     # API Controllers
│       ├── Models/          # Data models
│       ├── Repositories/    # Data access layer
│       └── Dockerfile       # Backend Docker configuration
└── docker-compose.yml       # Docker Compose configuration
```

---

## 🧰 Tech Stack

### Frontend

- **Angular 18**
- **Bootstrap 5**
- **TypeScript**
- **Nginx** (for serving the production build)

### Backend

- **ASP.NET Core 9**
- **Entity Framework Core (InMemory)** for data persistence
- **Repository Pattern** for structured data access

---

## ⚙️ Prerequisites

Ensure you have the following installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [.NET SDK 9.0](https://dotnet.microsoft.com/en-us/download) (for local development)
- [Node.js 18+](https://nodejs.org/en) (for local development)

---

## 🚀 Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/FeifanWang1029/EmployeeManagement.git
   cd employeeManagement
   ```

2. **Run with Docker Compose:**

   ```bash
   docker-compose up --build
   ```

3. **Access the application:**

   - Frontend: http://localhost:4200
   - Backend API: http://localhost:5182

---

## 🧑‍💻 Local Development Setup

### Frontend

```bash
cd frontend/employee-management-app
npm install
ng serve
```

### Backend

```bash
cd backend/EmployeeManagement
dotnet restore
dotnet run
```

---

## ✨ Key Features

- View employee list
- Add new employees
- Edit employee details
- Delete employees
- Responsive UI design

---

## 🔗 API Endpoints

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| GET    | `/api/Employee`      | Get all employees     |
| GET    | `/api/Employee/{id}` | Get employee by ID    |
| POST   | `/api/Employee`      | Create a new employee |
| PUT    | `/api/Employee/{id}` | Update an employee    |
| DELETE | `/api/Employee/{id}` | Delete an employee    |

---

## 🐳 Docker Configuration

This application is fully containerized using Docker.

- **Frontend Container:**

  - Builds the Angular app
  - Serves content using Nginx
  - Exposes port **4200**

- **Backend Container:**
  - Runs ASP.NET Core application
  - Exposes port **5182**

---

## ⚙️ Backend Setup

Install required dependencies:

```bash
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.InMemory
```

If the API returns **404 Not Found**, check the following:

- Ensure the controller `EmployeeController` exists under `EmployeeManagement.Controllers`.
- Verify the route `[Route("api/[controller]")]` is correctly set.
- Confirm that in `Program.cs`, you have included:

  ```csharp
  builder.Services.AddControllers();
  app.MapControllers();
  ```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
