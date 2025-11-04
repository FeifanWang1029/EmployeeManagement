import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
})
export class EmployeeTableComponent {
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log(data);
    });
  }
  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) => {
        console.log('Employee deleted successfully');
        // Update the local employee list after deletion
        this.employees = this.employees.filter(
          (employee) => employee.id !== id
        );
      },
      error: (error) => {
        console.error('Error deleting employee:', error);
      },
    });
  }
  editEmployee(id: number): void {
    // Implement navigation to edit form if needed
    this.router.navigate(['/edit', id]);
  }
}
