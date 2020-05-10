package com.tube.backend.service;

import com.tube.backend.contracts.user.UserRequest;
import com.tube.backend.contracts.user.UserResponse;
import com.tube.backend.resource.UserResource;
import org.springframework.stereotype.Service;

import static com.tube.backend.mapper.UserEntityMapper.generateTBUserEntityFromUserRequest;

@Service
public class UserService {
    final UserResource userResource;

    public UserService(UserResource userResource) {
        this.userResource = userResource;
    }

    public UserResponse getUser(String authId) {
        return userResource.getUser(authId);
    }

    public void addUser(UserRequest userRequest) {
        userResource.addUser(
                generateTBUserEntityFromUserRequest(userRequest)
        );
    }
}
