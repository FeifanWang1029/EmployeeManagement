using System.ComponentModel.DataAnnotations;
//
namespace EmployeeManagement.Models
{
    public class
    Employee
    {
        public int Id { get; set; }

        // data annotations for validation
        [Required(ErrorMessage = "First Name is required")]
        public required string FirstName { get; set; }
        [Required(ErrorMessage = "Last Name is required")]
        public required string LastName { get; set; }
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public required string Email { get; set; }
        [Required(ErrorMessage = "Phone is required")]
        public required string Phone { get; set; }
        [Required(ErrorMessage = "Position is required")]
        public required string Position { get; set; }
    }
}