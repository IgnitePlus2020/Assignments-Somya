package com.tgit.igniteplus.empdb.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tgit.igniteplus.empdb.entities.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
