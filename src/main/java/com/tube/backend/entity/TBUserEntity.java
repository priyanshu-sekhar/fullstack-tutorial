package com.tube.backend.entity;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;

@DynamoDBTable(tableName = "TBUser")
public class TBUserEntity {
    private String name;
    private String email;
    private String authId;

    @DynamoDBAttribute(attributeName = "NAME")
    public String getName() {
        return name;
    }

    @DynamoDBAttribute(attributeName = "EMAIL")
    public String getEmail() {
        return email;
    }

    @DynamoDBHashKey(attributeName = "AUTH_ID")
    public String getAuthId() {
        return authId;
    }

    public TBUserEntity setName(String name) {
        this.name = name;
        return this;
    }

    public TBUserEntity setEmail(String email) {
        this.email = email;
        return this;
    }

    public TBUserEntity setAuthId(String authId) {
        this.authId = authId;
        return this;
    }
}
