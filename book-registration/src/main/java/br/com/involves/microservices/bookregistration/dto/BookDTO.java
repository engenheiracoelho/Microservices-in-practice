package br.com.involves.microservices.bookregistration.dto;

import java.math.BigDecimal;

public class BookDTO {

	private int id;
	private String name;
	private BigDecimal price;
	private Boolean isAvailable;

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

	public Boolean getAvailable () {
		return isAvailable;
	}

	public void setAvailable (Boolean available) {
		isAvailable = available;
	}
}
