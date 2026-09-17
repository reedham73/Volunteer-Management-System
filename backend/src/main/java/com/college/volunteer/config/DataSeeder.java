package com.college.volunteer.config;

import com.college.volunteer.model.Volunteer;
import com.college.volunteer.repository.VolunteerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final VolunteerRepository repository;

    public DataSeeder(VolunteerRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        if (repository.count() == 0) {
            repository.save(new Volunteer("Aarav Shah", "aarav.shah@example.com", "9876543210",
                    "Computer Engineering", "3rd Year", "Public Speaking, MC", "Available", "Event Coordinator"));
            repository.save(new Volunteer("Diya Patel", "diya.patel@example.com", "9876543211",
                    "BCA", "2nd Year", "Excel, Coordination", "Available", "Registration Volunteer"));
            repository.save(new Volunteer("Kabir Mehta", "kabir.mehta@example.com", "9876543212",
                    "Information Technology", "3rd Year", "React, Java", "Unavailable", "Technical Volunteer"));
            repository.save(new Volunteer("Isha Solanki", "isha.solanki@example.com", "9876543213",
                    "BCA", "1st Year", "Craft, Design", "Available", "Decoration Volunteer"));
            repository.save(new Volunteer("Rehan Sheikh", "rehan.sheikh@example.com", "9876543214",
                    "Computer Engineering", "4th Year", "Guest Handling", "Available", "Hospitality Volunteer"));
            repository.save(new Volunteer("Ananya Joshi", "ananya.joshi@example.com", "9876543215",
                    "BCA", "2nd Year", "Networking, Sound Setup", "Unavailable", "Technical Volunteer"));
            repository.save(new Volunteer("Vivaan Rana", "vivaan.rana@example.com", "9876543216",
                    "Information Technology", "3rd Year", "Leadership, Planning", "Available", "Event Coordinator"));
            repository.save(new Volunteer("Sanya Kapoor", "sanya.kapoor@example.com", "9876543217",
                    "BCA", "1st Year", "Data Entry", "Available", "Registration Volunteer"));
            repository.save(new Volunteer("Yash Trivedi", "yash.trivedi@example.com", "9876543218",
                    "Computer Engineering", "2nd Year", "Decoration, Art", "Unavailable", "Decoration Volunteer"));
            repository.save(new Volunteer("Meera Chauhan", "meera.chauhan@example.com", "9876543219",
                    "BCA", "3rd Year", "Guest Relations", "Available", "Hospitality Volunteer"));
        }
    }
}
