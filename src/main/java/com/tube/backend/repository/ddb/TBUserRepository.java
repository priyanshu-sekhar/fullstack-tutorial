package com.tube.backend.repository.ddb;

import com.tube.backend.entity.TBUserEntity;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

@EnableScan
public interface TBUserRepository extends CrudRepository<TBUserEntity, String> {
    TBUserEntity findTBUserEntityByAuthId(String authId);
}
