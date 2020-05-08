package com.healthline.epidemic.model;

public enum InfectionTypes {
    EPIDEMIC_THRESHOLD(5),
    PANDEMIC_THRESHOLD(5);

    int threshold;

    InfectionTypes(int threshold) {
        this.threshold = threshold;
    }

    public int getThreshold() {
        return threshold;
    }
}
