package com.testcondor.testcondor.service;

import java.util.List;

import com.testcondor.testcondor.dominio.Provider;

public interface ProviderService {
	List<Provider> findAll();
    
	Provider findByProviderId(String providerId);
	   
	Provider saveProvider(Provider provider);
	 
	  void updateProvider(Provider provider);
	 
	  void deleteProvider(String providerId);
}
