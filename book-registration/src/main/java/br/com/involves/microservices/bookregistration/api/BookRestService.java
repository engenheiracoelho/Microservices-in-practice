package br.com.involves.microservices.bookregistration.api;

import br.com.involves.microservices.bookregistration.dto.BookDTO;
import br.com.involves.microservices.bookregistration.repository.BookRepository;
import br.com.involves.microservices.bookregistration.repositoryentities.BookEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookRestService {

	@Autowired
	BookRepository bookRepository;

	@GetMapping("/book")
	public String getById(){
		return "Book by id";
	}

	@PostMapping("/book")
	public BookDTO save(BookDTO bookDTO){
		bookRepository.save(new BookEntity(bookDTO.getName(), bookDTO.getPrice()));
		return bookDTO;
	}

}
