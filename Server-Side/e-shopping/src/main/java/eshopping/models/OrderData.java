package eshopping.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "OrderData")
public class OrderData {
	
	  @Id
	  private String id;
	  
	  private String orderid;
	  
	  private String address;

	  private String userid;

	public OrderData() {
		
	}

	public OrderData(String id, String orderid, String address, String userid) {
		super();
		this.id = id;
		this.orderid = orderid;
		this.address = address;
		this.userid = userid;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	@Override
	public String toString() {
		return "OrderData [id=" + id + ", orderid=" + orderid + ", address=" + address + ", userid=" + userid + "]";
	}

	
	  

}
