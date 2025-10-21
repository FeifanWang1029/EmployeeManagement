## 配置 Core + InMemory

```
dotnet add package Microsoft.EntityFrameworkCore

dotnet add package Microsoft.EntityFrameworkCore.InMemory


```

访问 Api 时 404 的常见原因：

- 确认路由和控制器：你的控制器是 `EmployeeManagement.Controllers.EmployeeController`（文件 EmployeeController.cs），路由为` api/[controller]`，所以请求路径 `/api/Employee `是正确的（路由对大小写通常不敏感）。
- 确认已把控制器加入到管线：必须在 `Program.cs` 中调用 `builder.Services.AddControllers() `并在构建后调用`app.MapControllers()`，否则会返回 `404`
