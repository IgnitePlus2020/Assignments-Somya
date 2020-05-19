package com.tgit.igniteplus.empdb.controller;

import java.util.List;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.tgit.igniteplus.empdb.entities.Employee;
import com.tgit.igniteplus.empdb.exceptions.EmployeeNotFoundException;
import com.tgit.igniteplus.empdb.services.EmployeeService;

@RestController
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	
	//get All Employee method
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeService.getAllEmployees();
		
	}
	
	//getEmployeeById
	@GetMapping("/employees/{id}")
	public Optional<Employee> getEmployeeById(@PathVariable("id") Long id) {
		try {
			return employeeService.getEmployeeById(id);
		} catch (EmployeeNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage());
			
		}
	}
	
	//createEmployee
	@PostMapping("/employees")
	public Employee createEmployee(@Valid @RequestBody Employee employee) {
		return employeeService.createEmployee(employee);
		
	}
	
	//deleteEmploeeById
	@DeleteMapping("/employees/{id}")
	public void deleteEmployeeById(@PathVariable("id") Long id) throws EmployeeNotFoundException {
		employeeService.deleteEmployeeById(id);
	}
	
	//updateEmployeeById
	@PutMapping("/employees/{id}")
	public Employee updateEmployeeById(@PathVariable("id") Long id,@RequestBody String newName) {
		try {
			return employeeService.updateEmployeeById(id, newName);
		} catch (EmployeeNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,e.getMessage());
		}
	}
	
	
}



