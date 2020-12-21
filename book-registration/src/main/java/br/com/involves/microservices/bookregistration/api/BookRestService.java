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

	@GetMapping
	public Iterable<BookEntity> get(){
		return bookRepository.findAll();
	}

    @GetMapping(value="/{id}")
	public BookEntity getById(@PathVariable("id") Integer id){
			return bookRepository.findById(id).get();
	}

	@PostMapping(consumes = "application/json", produces = "application/json")
	public BookDTO save(@RequestBody BookDTO bookDTO){
		BookEntity bookEntity = new BookEntity(bookDTO.getName(), bookDTO.getPrice());
		bookRepository.save(bookEntity);
		bookDTO.setId(bookEntity.getId());
		return bookDTO;
	}
}
