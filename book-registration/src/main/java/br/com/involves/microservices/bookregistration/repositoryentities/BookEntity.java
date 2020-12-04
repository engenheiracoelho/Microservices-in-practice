package br.com.involves.microservices.bookregistration.repositoryentities;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity(name="book")
@Table
public class BookEntity {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column
	private int id;

	@Column
	private String name;

	@Column
	private BigDecimal price;

	public BookEntity(int id, String name, BigDecimal price){
		this.id = id;
		this.name = name;
		this.price = price;
	}

	public BookEntity(String name, BigDecimal price){
		this.name = name;
		this.price = price;
	}


	public int getId () {
		return id;
	}

	public void setId (int id) {
		this.id = id;
	}

	public String getName () {
		return name;
	}

	public void setName (String name) {
		this.name = name;
	}

	public BigDecimal getPrice () {
		return price;
	}

	public void setPrice (BigDecimal price) {
		this.price = price;
	}

}
