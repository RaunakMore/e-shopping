package eshopping.messages;

public class Address {
	
	private String firstname;
	private String lastname;
	private String addressline1;
	private String addressline2;
	private String city;
	private String pincode;
	
	
	public Address() {
		
	}


	public Address(String firstname, String lastname, String addressline1, String addressline2, String city,
			String pincode) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.addressline1 = addressline1;
		this.addressline2 = addressline2;
		this.city = city;
		this.pincode = pincode;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getAddressline1() {
		return addressline1;
	}


	public void setAddressline1(String addressline1) {
		this.addressline1 = addressline1;
	}


	public String getAddressline2() {
		return addressline2;
	}


	public void setAddressline2(String addressline2) {
		this.addressline2 = addressline2;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getPincode() {
		return pincode;
	}


	public void setPincode(String pincode) {
		this.pincode = pincode;
	}


	@Override
	public String toString() {
		return "Address [firstname=" + firstname + ", lastname=" + lastname + ", addressline1=" + addressline1
				+ ", addressline2=" + addressline2 + ", city=" + city + ", pincode=" + pincode + "]";
	}
	
	

}
