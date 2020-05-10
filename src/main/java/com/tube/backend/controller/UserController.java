package com.tube.backend.controller;

import com.tube.backend.contracts.user.UserRequest;
import com.tube.backend.contracts.user.UserResponse;
import com.tube.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController("/users")
public class UserController {

    final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public UserResponse getUser(@RequestParam("user_id") String userId) {
        return userService.getUser(userId);
    }

    @PostMapping
    public void addUser(@RequestBody UserRequest userRequest) {
        userService.addUser(userRequest);
    }
}
