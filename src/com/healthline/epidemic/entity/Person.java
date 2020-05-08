package com.healthline.epidemic.entity;

import com.healthline.epidemic.model.Description;
import com.healthline.epidemic.model.InfectionProperties;

import java.util.HashSet;
import java.util.Set;

/*
Person p = infected => find country of p & add a count for that disease in that country
* */
public class Person extends Description implements InfectionProperties {
    Country origin;
    static Set<Person> persons = new HashSet<>();

    public Person(String name, Country origin) {
        super(name);
        this.origin = origin;
        persons.add(this);
    }


    @Override
    public String isInfected(Disease disease) {
        return origin.isInfected(disease);
    }
}
