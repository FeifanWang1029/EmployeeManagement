# Employee Management System

A full-stack employee management system built with Angular (frontend) and ASP.NET Core (backend).

## Project Structure

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
│       ├── Models/         # Data models
│       ├── Repositories/   # Data access layer
│       └── Dockerfile      # Backend Docker configuration
└── docker-compose.yml      # Docker Compose configuration
```

## 技术栈

### 前端
- Angular 18
- Bootstrap 5
- TypeScript
- Nginx (用于部署应用)

### 后端
- ASP.NET Core 9
- Entity Framework Core (InMemory)
- Repository 模式

## 环境要求

- Docker
- Docker Compose
- .NET SDK 9.0 (本地开发用)
- Node.js 18+ (本地开发用)

## 快速开始

1. 克隆仓库:
   ```bash
   git clone https://github.com/FeifanWang1029/EmployeeManagement.git
   cd employeeManagement
   ```

2. 使用 Docker Compose 运行:
   ```bash
   docker-compose up --build
   ```

3. 访问应用:
   - 前端: http://localhost:4200
   - 后端 API: http://localhost:5182

## 本地开发设置

### 前端
```bash
cd frontend/employee-management-app
npm install
ng serve
```

### 后端
```bash
cd backend/EmployeeManagement
dotnet restore
dotnet run
```

## 主要功能

- 员工列表展示
- 添加新员工
- 编辑员工信息
- 删除员工
- 响应式设计

## API 端点

- GET /api/Employee - 获取所有员工
- GET /api/Employee/{id} - 通过 ID 获取员工
- POST /api/Employee - 创建新员工
- PUT /api/Employee/{id} - 更新员工信息
- DELETE /api/Employee/{id} - 删除员工

## Docker 配置

应用通过 Docker 容器化:

- 前端容器:
  - 构建 Angular 应用
  - 通过 Nginx 提供服务
  - 暴露端口 4200

- 后端容器:
  - 运行 ASP.NET Core 应用
  - 暴露端口 5182

## 后端配置

```
dotnet add package Microsoft.EntityFrameworkCore

dotnet add package Microsoft.EntityFrameworkCore.InMemory


```

访问 Api 时 404 的常见原因：

- 确认路由和控制器：你的控制器是 `EmployeeManagement.Controllers.EmployeeController`（文件 EmployeeController.cs），路由为` api/[controller]`，所以请求路径 `/api/Employee `是正确的（路由对大小写通常不敏感）。
- 确认已把控制器加入到管线：必须在 `Program.cs` 中调用 `builder.Services.AddControllers() `并在构建后调用`app.MapControllers()`，否则会返回 `404`
