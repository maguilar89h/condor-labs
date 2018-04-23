package com.testcondor.testcondor.repository.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.testcondor.testcondor.dominio.Provider;
import com.testcondor.testcondor.repository.ProviderRepository;

@Repository
public class ProviderRepositoryImpl implements ProviderRepository{
	
	@Autowired
	private final MongoOperations mongoOperations;
	
	
	public Optional<Provider> findOne(String id) {
		Provider p = this.mongoOperations.findOne(new Query(Criteria.where("id").is(id)), Provider.class);
        Optional<Provider> provider = Optional.ofNullable(p);
        return provider;
    }
	
	@Autowired
   public ProviderRepositoryImpl(MongoOperations mongoOperations) {
       this.mongoOperations = mongoOperations;
   }
	
	@Override
	public Provider saveProvider(Provider provider) {
		this.mongoOperations.save(provider);
		return findOne(provider.getId()).get();
	}

	@Override
	public void updateProvider(Provider provider ) {
		this.mongoOperations.save(provider);
	}

	@Override
	public void deleteProvider(String id) {
		this.mongoOperations.findAllAndRemove(new Query(Criteria.where("id").is(id)), Provider.class);
		
	}
	
	@Override
	public Optional<List<Provider>> findAll() {
		List<Provider> providers = this.mongoOperations.find(new Query(), Provider.class);
		Optional<List<Provider>> optionalProviders = Optional.ofNullable(providers);
		return optionalProviders;
	}

}
