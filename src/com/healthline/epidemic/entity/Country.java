package com.healthline.epidemic.entity;

import com.healthline.epidemic.model.Description;
import com.healthline.epidemic.model.InfectionProperties;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

import static com.healthline.epidemic.model.InfectionTypes.EPIDEMIC_THRESHOLD;

/**
 * multiple countries
 * multiple diseases
 * multiple people
 * 1 person -> 1 country
 * 1 person -> >=1 disease
 * 1 country -> >=1 disease
 * count per disease per country
 * count per country
 */
public class Country extends Description implements InfectionProperties {
    static Map<String, Map<String, AtomicInteger>> diseaseCount = new HashMap<>();
    String countryCode;

    public Country(String countryName) {
        super(countryName);
        this.countryCode = this.getName().substring(0, 2);
    }

    // 1. this country's name exists as a key in the map
    // 2. If it doesnt exist -> create a key wth empty value
    // 3. this.get(d) exists
    // 4. if it doesnt exist -> create a key with d, value 0
    // 5. increment count of map.get(this.name).get(d)
    public String isInfected(Disease d) {
        String countryName = this.getName();
        String diseaseName = d.getName();
        String msg = "";

        diseaseCount.putIfAbsent(
                countryName,
                Map.of(diseaseName, new AtomicInteger(0))
        );

        if (!diseaseCount.get(countryName).containsKey(diseaseName))
            diseaseCount.get(countryName).put(diseaseName, new AtomicInteger(0));


        int infectionCnt = diseaseCount.get(countryName).get(diseaseName).addAndGet(1);
        diseaseCount.get(countryName)
                .put(diseaseName, new AtomicInteger(infectionCnt));

        if (infectionCnt >= EPIDEMIC_THRESHOLD.getThreshold()) {
            // declare epidemic in that country for that disease
            msg = "Declared Epidemic in "
                    + countryName
                    + " for disease "
                    + diseaseName;

            msg = d.incrementEpidemicCount(msg);
        }

        return msg;
    }
}
