package com.college.volunteer.model;

public class DashboardStats {
    private long totalVolunteers;
    private long availableVolunteers;
    private long unavailableVolunteers;

    public DashboardStats(long totalVolunteers, long availableVolunteers, long unavailableVolunteers) {
        this.totalVolunteers = totalVolunteers;
        this.availableVolunteers = availableVolunteers;
        this.unavailableVolunteers = unavailableVolunteers;
    }

    public long getTotalVolunteers() { return totalVolunteers; }
    public long getAvailableVolunteers() { return availableVolunteers; }
    public long getUnavailableVolunteers() { return unavailableVolunteers; }
}
