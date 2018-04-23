package com.testcondor.testcondor.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.testcondor.testcondor.dominio.Provider;
import com.testcondor.testcondor.service.ProviderService;

@RestController
public class ProviderController {
	
	@Autowired
	private ProviderService providerService;
	
	@GetMapping("/provider/")
	public List<Provider> listar(){
		return providerService.findAll();
	}
	
	@GetMapping("/provider/{id}")
	public Provider consultar(@PathVariable String id){
		return providerService.findByProviderId(id);
	}
	

	@PostMapping("/provider")
	public Provider guardar(@RequestBody @Valid Provider provider){
		return providerService.saveProvider(provider);
	}
	
}
