package com.nikolay.LabourManagement.controller;

import com.nikolay.LabourManagement.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
