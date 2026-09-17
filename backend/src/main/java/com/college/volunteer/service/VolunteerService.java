package com.college.volunteer.service;

import com.college.volunteer.exception.ResourceNotFoundException;
import com.college.volunteer.model.DashboardStats;
import com.college.volunteer.model.Volunteer;
import com.college.volunteer.repository.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VolunteerService {

    @Autowired
    private VolunteerRepository volunteerRepository;

    public List<Volunteer> getAllVolunteers() {
        return volunteerRepository.findAll();
    }

    public Volunteer getVolunteerById(String id) {
        return volunteerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Volunteer not found with id: " + id));
    }

    public Volunteer createVolunteer(Volunteer volunteer) {
        return volunteerRepository.save(volunteer);
    }

    public Volunteer updateVolunteer(String id, Volunteer updated) {
        Volunteer existing = getVolunteerById(id);
        existing.setFullName(updated.getFullName());
        existing.setEmail(updated.getEmail());
        existing.setPhone(updated.getPhone());
        existing.setDepartment(updated.getDepartment());
        existing.setYear(updated.getYear());
        existing.setSkills(updated.getSkills());
        existing.setAvailability(updated.getAvailability());
        existing.setVolunteerRole(updated.getVolunteerRole());
        return volunteerRepository.save(existing);
    }

    public void deleteVolunteer(String id) {
        Volunteer existing = getVolunteerById(id);
        volunteerRepository.delete(existing);
    }

    public List<Volunteer> searchByName(String name) {
        return volunteerRepository.findByFullNameContainingIgnoreCase(name);
    }

    public List<Volunteer> filterByAvailability(String availability) {
        return volunteerRepository.findByAvailability(availability);
    }

    public DashboardStats getDashboardStats() {
        long total = volunteerRepository.count();
        long available = volunteerRepository.countByAvailability("Available");
        long unavailable = volunteerRepository.countByAvailability("Unavailable");
        return new DashboardStats(total, available, unavailable);
    }
}
