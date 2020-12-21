package br.com.involves.microservices.bookregistration.repositoryentities;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity(name="book")
@Table
public class BookEntity {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column
	private Integer id;

	@Column
	private String name;

	@Column
	private BigDecimal price;

	@Column
	private Boolean isAvailable;

	public BookEntity(){}

	public BookEntity(Integer id, String name, BigDecimal price, Boolean isAvailable){
		this.id = id;
		this.name = name;
		this.price = price;
		this.isAvailable = isAvailable;
	}

	public BookEntity(String name, BigDecimal price){
		this.name = name;
		this.price = price;
		this.isAvailable = true;
	}


	public Integer getId () {
		return id;
	}

	public void setId (Integer id) {
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

	public Boolean getAvailable () {
		return isAvailable;
	}

	public void setAvailable (Boolean available) {
		isAvailable = available;
	}

}
