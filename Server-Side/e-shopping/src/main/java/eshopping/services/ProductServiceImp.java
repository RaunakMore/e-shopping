package eshopping.services;

import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import eshopping.models.Product;
import eshopping.dao.ProductRepository;


@Service
public class ProductServiceImp implements ProductServiceInf {

	  @Autowired
	  private ProductRepository productRepository;

	  public Product store(MultipartFile file) throws IOException {
	    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
	    Product FileDB = new Product(fileName, file.getContentType(), fileName, 0, file.getBytes());

	    return productRepository.save(FileDB);
	  }

	  public Product getFile(String id) {
	    return productRepository.findById(id).get();
	  }
	  
	  public Stream<Product> getAllFiles() {
	    return productRepository.findAll().stream();
	  }
	  
	 
}

