package eshopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eshopping.models.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {

}

