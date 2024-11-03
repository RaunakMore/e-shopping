package eshopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eshopping.models.OrderCartData;

@Repository
public interface OrderCartDataRepository extends JpaRepository<OrderCartData , String>{

}
