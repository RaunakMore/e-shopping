package eshopping.messages;

import java.util.List;

public class ResponseOrderData {
	
	private Address address;
	
	private List<ResponseCartList> cartitems;
	
	private String userid;

	public ResponseOrderData() {
		
	}

	public ResponseOrderData(Address address, List<ResponseCartList> cartitems, String userid) {
		super();
		this.address = address;
		this.cartitems = cartitems;
		this.userid = userid;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public List<ResponseCartList> getCartitems() {
		return cartitems;
	}

	public void setCartitems(List<ResponseCartList> cartitems) {
		this.cartitems = cartitems;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}
	
	

}
