package com.klef.exam;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootExamProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootExamProjectApplication.class, args);
		System.out.println("Project Running Successfully");
	}

}
