package br.com.involves.microservices.bookregistration.repository;

import br.com.involves.microservices.bookregistration.repositoryentities.BookEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository<BookEntity,Integer> {}
