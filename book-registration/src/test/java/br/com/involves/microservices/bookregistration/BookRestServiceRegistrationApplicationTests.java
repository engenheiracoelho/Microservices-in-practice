package br.com.involves.microservices.bookregistration;

import br.com.involves.microservices.bookregistration.api.BookRestService;
import br.com.involves.microservices.bookregistration.dto.BookDTO;
import br.com.involves.microservices.bookregistration.repository.BookRepository;
import br.com.involves.microservices.bookregistration.repositoryentities.BookEntity;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@SpringBootTest
@RunWith(MockitoJUnitRunner.class)
class BookRestServiceRegistrationApplicationTests {

	@Mock
	private BookRepository bookRepository;

	@InjectMocks
	private BookRestService bookRestService;

	@Test
	public void should_save_with_success(){
		BookDTO book = new BookDTO();
		book.setName("Book name");
		book.setAvailable(true);
		book.setPrice(new BigDecimal("20"));

		bookRestService.save(book);
	}


}
