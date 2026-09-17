package com.college.volunteer.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "volunteers")
public class Volunteer {

    @Id
    private String id;

    @NotBlank(message = "Full name is required")
    private String fullName;

    @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    @NotBlank(message = "Phone is required")
    private String phone;

    @NotBlank(message = "Department is required")
    private String department;

    @NotBlank(message = "Year is required")
    private String year;

    private String skills;

    @NotBlank(message = "Availability is required")
    private String availability; // Available / Unavailable

    @NotBlank(message = "Volunteer role is required")
    private String volunteerRole;

    public Volunteer() {
    }

    public Volunteer(String fullName, String email, String phone, String department, String year,
                      String skills, String availability, String volunteerRole) {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.department = department;
        this.year = year;
        this.skills = skills;
        this.availability = availability;
        this.volunteerRole = volunteerRole;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public String getYear() { return year; }
    public void setYear(String year) { this.year = year; }

    public String getSkills() { return skills; }
    public void setSkills(String skills) { this.skills = skills; }

    public String getAvailability() { return availability; }
    public void setAvailability(String availability) { this.availability = availability; }

    public String getVolunteerRole() { return volunteerRole; }
    public void setVolunteerRole(String volunteerRole) { this.volunteerRole = volunteerRole; }
}
