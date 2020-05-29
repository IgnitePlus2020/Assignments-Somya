package com.tgt.igniteplus.empdb.services;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.tgt.igniteplus.empdb.entities.Employee;
import com.tgt.igniteplus.empdb.exceptions.EmployeeNotFoundException;
import com.tgt.igniteplus.empdb.repositories.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	//CreateEmployee
	public Employee createEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}
	
	//getAllEmployees
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
		
	}
	
	//getEmployeeById
	public Optional<Employee> getEmployeeById(Long id) throws EmployeeNotFoundException{
		Optional<Employee> employee=employeeRepository.findById(id);
		
		if(!employee.isPresent())
			throw new EmployeeNotFoundException("employee not found");
		return employee;
	}
	
	//deleteEmployeeById
	public void deleteEmployeeById(Long id) {
		
		Optional<Employee> employee=employeeRepository.findById(id);
		if(!employee.isPresent()) {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"employee not found in repo,enter correct details");
		}

		employeeRepository.deleteById(id);	
	
	}
	
	//updateEmpNameById
	public Employee updateEmployeeById(Long id,String newName) throws EmployeeNotFoundException {
		
		if(!employeeRepository.findById(id).isPresent()) {
		throw new EmployeeNotFoundException("employee not found");
		}
		Employee employee=employeeRepository.getOne(id);
		employee.setName(newName);
		return employeeRepository.save(employee);
		
	}
	
	

	
}
