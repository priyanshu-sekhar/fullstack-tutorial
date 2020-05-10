package com.tube.backend.resource;

import com.tube.backend.contracts.user.UserResponse;
import com.tube.backend.entity.TBUserEntity;
import com.tube.backend.mapper.UserEntityMapper;
import com.tube.backend.repository.ddb.TBUserRepository;
import org.springframework.stereotype.Component;

import static com.tube.backend.mapper.UserEntityMapper.generateUserResponseFromTBUserEntity;

@Component
public class UserResource {

    final TBUserRepository userRepository;

    public UserResource(TBUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserResponse getUser(String authId) {
        return generateUserResponseFromTBUserEntity(
                userRepository.findTBUserEntityByAuthId(authId)
        );
    }

    public void addUser(TBUserEntity tbUserEntity) {
        userRepository.save(tbUserEntity);
    }
}
