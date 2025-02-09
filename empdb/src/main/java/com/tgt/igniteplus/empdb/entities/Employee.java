package com.tgt.igniteplus.empdb.entities;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.validation.constraints.Pattern;



//Entity
@Entity

@Table(name="employee")
public class Employee {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(name="NAME",length=50,nullable=false,unique=true)
	private String name;
	
	@Column(name="EMAIL",length=30,nullable=false)
	private String email;
	

	@Pattern(regexp = "^\\d{10}$",message = "mobile number should have 10 digits")
	@Column(name="MOBILE",length=10,nullable=false)
	private String mobile;
	
	@Column(name="COMPANY",length=30,nullable=false)
	private String company;

	//default constructor
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	
	public Employee(Long id, String name, String email, String mobile, String company) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.mobile = mobile;
		this.company = company;
	}

	
	

	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getMobile() {
		return mobile;
	}



	public void setMobile(String mobile) {
		this.mobile = mobile;
	}



	public String getCompany() {
		return company;
	}



	public void setCompany(String company) {
		this.company = company;
	}



	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", email=" + email + ", mobile=" + mobile + ", company="
				+ company + "]";
	}

}
