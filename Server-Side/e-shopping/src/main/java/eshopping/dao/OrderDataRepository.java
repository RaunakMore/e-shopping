package eshopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eshopping.models.OrderData;

@Repository
public interface OrderDataRepository extends JpaRepository<OrderData, String> {

}
