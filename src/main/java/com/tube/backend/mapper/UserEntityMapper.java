package com.tube.backend.mapper;

import com.tube.backend.contracts.user.UserRequest;
import com.tube.backend.contracts.user.UserResponse;
import com.tube.backend.entity.TBUserEntity;

public class UserEntityMapper {
    public static TBUserEntity generateTBUserEntityFromUserRequest(UserRequest userRequest) {
        return new TBUserEntity()
                .setAuthId(userRequest.getAuthId())
                .setEmail(userRequest.getEmail())
                .setName(userRequest.getName());
    }

    public static UserResponse generateUserResponseFromTBUserEntity(TBUserEntity userEntity) {
        return new UserResponse()
                .setAuthId(userEntity.getAuthId())
                .setEmail(userEntity.getEmail())
                .setName(userEntity.getName());
    }

}
