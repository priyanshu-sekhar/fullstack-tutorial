package com.healthline.epidemic;

import com.healthline.epidemic.entity.Country;
import com.healthline.epidemic.entity.Disease;
import com.healthline.epidemic.entity.Person;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Please enter one of the following options -" +
                "1. To Register a Person \n" +
                "2. To Register a Country \n" +
                "3. To Register a Disease");

        Scanner sc = new Scanner(System.in);
        int option = sc.nextInt();

        switch (option) {
            case 1:
                // register a person
                RegisterEntity.registerPerson();
            case 2:
                // register a country
            case 3:
                // register a disease
            default:
                System.out.println("Invalid choice. Please re-enter");
        }

    }
}
