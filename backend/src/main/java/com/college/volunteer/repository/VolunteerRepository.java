package com.college.volunteer.repository;

import com.college.volunteer.model.Volunteer;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface VolunteerRepository extends MongoRepository<Volunteer, String> {

    long countByAvailability(String availability);

    List<Volunteer> findByAvailability(String availability);

    List<Volunteer> findByFullNameContainingIgnoreCase(String name);
}
