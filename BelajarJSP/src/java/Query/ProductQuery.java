/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Query;

/**
 *
 * @author Wikon3
 */
public class ProductQuery {
     public String get = "SELECT * FROM product";
    public String create = "INSERT INTO product (name, product_type, " + 
            "stock, price, expired) VALUES (?, ?, ?, ?, ?)";
    public String getByName = "SELECT * FROM product where name LIKE ?";
}
