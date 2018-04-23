package com.testcondor.testcondor.dominio;

import java.io.Serializable;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@Document(collection = "providers")
@JsonPropertyOrder({"id","firstName","lasttName","middleName","email","employeId",
	 "providerType","staffStatus","assignedTo","status","createdBy","updatedBy","projectedStartDate"})
public class Provider implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
    @NotNull 
	private String id;
	private String firstName;
	private String lasttName;
	private String middleName;
	private String email;
	private String employeId;
	private String providerType;
	private String staffStatus;
	private String assignedTo;
	private String status;
	private String createdBy;
	private String updatedBy;
	private String projectedStartDate;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLasttName() {
		return lasttName;
	}
	public void setLasttName(String lasttName) {
		this.lasttName = lasttName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getEmployeId() {
		return employeId;
	}
	public void setEmployeId(String employeId) {
		this.employeId = employeId;
	}
	public String getProviderType() {
		return providerType;
	}
	public void setProviderType(String providerType) {
		this.providerType = providerType;
	}
	public String getStaffStatus() {
		return staffStatus;
	}
	public void setStaffStatus(String staffStatus) {
		this.staffStatus = staffStatus;
	}
	public String getAssignedTo() {
		return assignedTo;
	}
	public void setAssignedTo(String assignedTo) {
		this.assignedTo = assignedTo;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public String getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}
	public String getProjectedStartDate() {
		return projectedStartDate;
	}
	public void setProjectedStartDate(String projectedStartDate) {
		this.projectedStartDate = projectedStartDate;
	}
	
}
