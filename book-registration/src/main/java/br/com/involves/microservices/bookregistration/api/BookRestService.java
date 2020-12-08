package br.com.involves.microservices.bookregistration.api;

import br.com.involves.microservices.bookregistration.dto.BookDTO;
import br.com.involves.microservices.bookregistration.repository.BookRepository;
import br.com.involves.microservices.bookregistration.repositoryentities.BookEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/book")
public class BookRestService {

	@Autowired
	BookRepository bookRepository;

@GetMapping(value="/{id}")
	public BookEntity getById(@PathVariable("id") Integer id){
			return bookRepository.findById(id).get();
	}

	@PostMapping
	public BookDTO save(BookDTO bookDTO){
		bookRepository.save(new BookEntity(bookDTO.getName(), bookDTO.getPrice()));
		return bookDTO;
	}
}
