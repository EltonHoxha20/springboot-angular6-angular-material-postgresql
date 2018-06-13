package com.example.demo.service;

public class Email extends Thread {

	private String name;
	
	public Email(String name) {
		this.name = name;
	}
	
	@Override
	public void run() {
		sendEmail(this.name);
	}
	
	public void sendEmail(String name) {
		System.out.println("Sending email to "+name+" from Thead "+Thread.currentThread().getName());
	}
	
}
