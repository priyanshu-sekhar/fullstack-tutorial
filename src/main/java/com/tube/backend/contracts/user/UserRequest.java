package com.tube.backend.contracts.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class UserRequest {
    @JsonProperty("name")
    private String name;

    @JsonProperty("auth_id")
    private String authId;

    @JsonProperty("email")
    private String email;

    public String getName() {
        return name;
    }

    public UserRequest setName(String name) {
        this.name = name;
        return this;
    }

    public String getAuthId() {
        return authId;
    }

    public UserRequest setAuthId(String authId) {
        this.authId = authId;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public UserRequest setEmail(String email) {
        this.email = email;
        return this;
    }
}
