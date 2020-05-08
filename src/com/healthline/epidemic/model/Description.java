package com.healthline.epidemic.model;

public abstract class Description {
    String name;

    public Description(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
