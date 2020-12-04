package br.com.involves.microservices.bookregistration.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookRestService {

	@GetMapping("/book")
	public String hello(){
		return "Hello world!";
	}
}
