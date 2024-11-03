package eshopping.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "OrderCartData")
public class OrderCartData {

	  @Id
	  private String id;
	  
	  private String orderid;
	  
	  private String pid;
	  
	  private int qty;

	public OrderCartData() {

	}

	public OrderCartData(String id, String orderid, String pid, int qty) {
		super();
		this.id = id;
		this.orderid = orderid;
		this.pid = pid;
		this.qty = qty;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getOrderid() {
		return orderid;
	}

	public void setOrderid(String orderid) {
		this.orderid = orderid;
	}

	public String getPid() {
		return pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	@Override
	public String toString() {
		return "OrderCartData [id=" + id + ", orderid=" + orderid + ", pid=" + pid + ", qty=" + qty + "]";
	}
	
	
	
}