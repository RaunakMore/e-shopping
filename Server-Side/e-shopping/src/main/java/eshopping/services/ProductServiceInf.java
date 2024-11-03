package eshopping.services;

import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.web.multipart.MultipartFile;

import eshopping.models.Product;

public interface ProductServiceInf {

	public Product store(MultipartFile file) throws IOException;
	public Product getFile(String id);
	public Stream<Product> getAllFiles();
}
