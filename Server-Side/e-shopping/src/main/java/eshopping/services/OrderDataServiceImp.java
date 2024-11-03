package eshopping.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eshopping.dao.OrderCartDataRepository;
import eshopping.dao.OrderDataRepository;
import eshopping.messages.ResponseCartList;
import eshopping.messages.ResponseOrderData;
import eshopping.models.OrderCartData;
import eshopping.models.OrderData;

@Service
public class OrderDataServiceImp {
	
	@Autowired
	private OrderDataRepository odr;
	
	@Autowired
	private OrderCartDataRepository ocdr;
	
	public String saveData(ResponseOrderData resData) {
		
		String address = resData.getAddress().toString();
		String userid  = resData.getUserid();
		String     id  = Long.toString(odr.count() + 1);
		String orderid = "ODR"+id;
		
		OrderData od = new OrderData(id,orderid,address, userid);
		odr.save(od);
		
		List<ResponseCartList> cartitemslist = resData.getCartitems();
		
		for(ResponseCartList item : cartitemslist) 
		{
			String cid = Long.toString(odr.count() + 1);
			
			OrderCartData itm = new OrderCartData(cid, orderid, item.getId(), item.getPrice());
			ocdr.save(itm);
		}
		
		return orderid;
		
	}
}
