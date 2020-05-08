package com.healthline.epidemic.entity;

import com.healthline.epidemic.model.Description;
import com.healthline.epidemic.model.InfectionTypes;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

public class Disease extends Description {
    static Map<String, AtomicInteger> epidemicCount = new HashMap<>();

    public Disease(String name) {
        super(name);
    }

    public String incrementEpidemicCount(String msg) {
        epidemicCount.putIfAbsent(this.getName(), new AtomicInteger(0));
        epidemicCount.get(this.getName()).incrementAndGet();

        if (epidemicCount.get(this.getName()).intValue() >= InfectionTypes.PANDEMIC_THRESHOLD.getThreshold()) {
            msg += "\n"
                    + this.getName()
                    + " is new declared as pandemic";
        }

        System.out.println(InfectionTypes.EPIDEMIC_THRESHOLD.toString());
        return msg;
    }
}
