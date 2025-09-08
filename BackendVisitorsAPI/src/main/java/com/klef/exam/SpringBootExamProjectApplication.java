package com.klef.exam;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class SpringBootExamProjectApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(SpringBootExamProjectApplication.class, args);
		System.out.println("Project Running Successfully");
	}

}
