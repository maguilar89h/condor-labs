package com.testcondor.testcondor.repository;

import java.util.List;
import java.util.Optional;

import com.testcondor.testcondor.dominio.Provider;

public interface ProviderRepository {
	
	Optional<List<Provider>> findAll();
	
	public Provider saveProvider(Provider provider);
	
	public void updateProvider(Provider provider);
	
	public void deleteProvider(String id);
	
}
