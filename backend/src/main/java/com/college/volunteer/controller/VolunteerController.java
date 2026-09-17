package com.college.volunteer.controller;

import com.college.volunteer.model.Volunteer;
import com.college.volunteer.service.VolunteerService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/volunteers")
public class VolunteerController {

    @Autowired
    private VolunteerService volunteerService;

    @GetMapping
    public ResponseEntity<List<Volunteer>> getAllVolunteers(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String availability) {

        if (search != null && !search.isBlank()) {
            return ResponseEntity.ok(volunteerService.searchByName(search));
        }
        if (availability != null && !availability.isBlank()) {
            return ResponseEntity.ok(volunteerService.filterByAvailability(availability));
        }
        return ResponseEntity.ok(volunteerService.getAllVolunteers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Volunteer> getVolunteerById(@PathVariable String id) {
        return ResponseEntity.ok(volunteerService.getVolunteerById(id));
    }

    @PostMapping
    public ResponseEntity<Volunteer> createVolunteer(@Valid @RequestBody Volunteer volunteer) {
        Volunteer created = volunteerService.createVolunteer(volunteer);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Volunteer> updateVolunteer(@PathVariable String id, @Valid @RequestBody Volunteer volunteer) {
        return ResponseEntity.ok(volunteerService.updateVolunteer(id, volunteer));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVolunteer(@PathVariable String id) {
        volunteerService.deleteVolunteer(id);
        return ResponseEntity.noContent().build();
    }
}
