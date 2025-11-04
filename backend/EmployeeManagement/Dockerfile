FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 80
ENV ASPNETCORE_URLS=http://+:80

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["EmployeeManagement.csproj", "./"]
RUN dotnet restore "EmployeeManagement.csproj"
COPY . .
WORKDIR "/src"
RUN dotnet build "EmployeeManagement.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "EmployeeManagement.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "EmployeeManagement.dll"]