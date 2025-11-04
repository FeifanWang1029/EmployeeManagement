import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    position: '',
  };

  errMessage: string = '';
  isEditMode: boolean = false;
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.employeeService.getEmployeeById(Number(id)).subscribe({
          next: (emp) => {
            this.employee = emp;
          },
          error: (error) => {
            console.error('Error fetching employee:', error);
            this.errMessage = `Error fetching employee: ${
              error.message || error.statusText
            }`;
          },
        });
      }
    });
  }
  onSubmit() {
    if (this.isEditMode) {
      this.employeeService.updateEmployee(this.employee).subscribe({
        next: (updatedEmployee) => {
          this.router.navigate(['/']);
          console.log('Employee successfully updated:', updatedEmployee);
        },
        error: (error) => {
          console.error('Error updating employee:', error);
          this.errMessage = `Error updating employee: ${
            error.message || error.statusText
          }`;
        },
      });
    } else {
      this.employeeService.createEmployee(this.employee).subscribe({
        next: (createdEmployee) => {
          this.router.navigate(['/']);
          console.log('Employee successfully created:', createdEmployee);
        },
        error: (error) => {
          console.error('Error creating employee:', error);
          this.errMessage = `Error creating employee: ${
            error.message || error.statusText
          }`;
        },
      });
    }
  }
}
