package eshopping.services;

import eshopping.messages.ResponseCart;
import eshopping.models.Cart;

public interface CartServiceInf {

	
	public void addToCart(Cart cart);
	
	public ResponseCart getCart();
	
	public void updatecart(String cid, int quantity);
	
	public void removeitem(String cid);
	
	public void deleteall();
	
	public boolean addtocart(String cid, int quantity);
	
	
}
