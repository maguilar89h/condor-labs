package com.testcondor.testcondor.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.testcondor.testcondor.dominio.Provider;
import com.testcondor.testcondor.repository.impl.ProviderRepositoryImpl;
import com.testcondor.testcondor.service.ProviderService;

@Service("providerService")
@Transactional
public class ProviderServiceImpl implements ProviderService{
	
    private ProviderRepositoryImpl providerRepository;
    
    @Autowired
    public ProviderServiceImpl(ProviderRepositoryImpl providerRepository){
        this.providerRepository = providerRepository;
    }
	
	@Override
	public List<Provider> findAll() {
		 Optional<List<Provider>> provider = providerRepository.findAll();
	        return provider.get();
	}

	@Override
	public Provider findByProviderId(String id) {
		 Optional<Provider> provider = providerRepository.findOne(id);
	        if (provider.isPresent()) {
	            return provider.get();
	        }else{
	        	return null;
	        }
	}

	@Override
	public Provider saveProvider(Provider provider) {
		return providerRepository.saveProvider(provider);
	}

	@Override
	public void updateProvider(Provider provider) {
		providerRepository.updateProvider(provider);
	}

	@Override
	public void deleteProvider(String id) {
		providerRepository.deleteProvider(id);
	}

}
