DROP TABLE item;

CREATE TABLE "item" (
  "item_id" SERIAL PRIMARY KEY,
  "item_name" VARCHAR(200),
  "item_print" VARCHAR(120),
  "item_color" VARCHAR(200),
  "item_department" VARCHAR(200),
  "item_size" VARCHAR(80),
 "item_description" TEXT,
  "item_price" Numeric(6,2),
 "item_pathway" VARCHAR
);

INSERT INTO "item" (item_name, item_print, item_color, item_department, item_size, item_description, item_price, item_pathway)
Values('The Charlotte', 'Floral', 'Fuschia', 'Headband', 'one size', 'Floral Knotted Headband with cushioned ends.', 12.99, 'images/headband/The-Charlotte.jpg'), 
('The Evangeline', 'Floral', 'Grey', 'Headband', 'one size', 'Floral Headband with cushioned ends and bow detail.', 12.99, 'images/headband/The-Evangeline.jpg'), 
('The Rosa', 'Floral', 'Yellow', 'Headband', 'one size', 'Floral Knotted Headband with cushioned ends.', 12.99, 'images/headband/The-Rosa.jpeg'), 
('The Adelyn', 'Floral', 'White', 'Headband', 'one size', 'Floral Knotted Headband with cushioned ends.', 12.99, 'images/headband/The-Adelyn.jpg'), 
('The Samantha', 'Floral', 'Tan', 'Headband', 'one size', 'Floral Knotted Headband with cushioned ends.', 12.99, 'images/headband/The-Samantha.jpg'), 
('The Sarah', 'Floral', 'Yellow', 'Headband', 'one size', 'Floral Knotted Headband with cushioned ends.', 12.99, 'images/headband/The-Sarah.jpg'), 
('The Kimberly', 'Floral', 'Red', 'Headband', 'one size', 'Floral Knotted Headband with cushioned ends.', 12.99, 'images/headband/The-Kimberly.jpg'), 
('The Rosa', 'Floral', 'Yellow', 'Headband', 'one size', 'Floral Knotted Headband with cushioned ends.', 12.99, 'images/headband/The-Rosa.jpg'), 
('The Madison', 'Floral', 'Light Blue', 'Headband', 'one size', 'Floral Knotted Headband with cushioned ends.', 12.99, 'images/headband/The-Madison.jpg'),
('The Harley', 'Floral', 'Yellow', 'Headband', 'one size', 'Floral Knotted Headband with cushioned ends.', 12.99, 'images/headband/The-Harley.jpg'),
('Cosmetic Bag', 'Personalized', 'Natural', 'Bachelorette', 'one size', 'Personalized cosmetic bags.', 12.99, 'images/bachelorette/cosmetic_bags.jpeg'),
('Tank Tops', 'Personalized', 'Black', 'Bachelorette', 'S · M · L · XL', 'Personalized tank tops with Taylor Swift quotes.', 20.99, 'images/bachelorette/tank-top.jpeg'),
('Wifey Pullover', 'Personalized', 'Black', 'Bachelorette', 'S · M · L · XL', 'Crewneck "Wifey" Pullover.', 40.99, 'images/bachelorette/Sweatshirt-black1.jpg'), 
('Bachelorette Pullover', 'Personalized', 'Black', 'Bachelorette', 'S · M · L · XL', 'Crewneck "Bachelorette" Pullover.', 40.99, 'images/bachelorette/Sweatshirt-black2.jpg'), 
('Bride to Be Pullover', 'Personalized', 'Black', 'Bachelorette', 'S · M · L · XL', 'Crewneck "Bride to Be Pullover" Pullover.', 40.99, 'images/bachelorette/Sweatshirt-black3.jpg'),
('Future Mrs Pullover', 'Personalized', 'Black', 'Bachelorette', 'S · M · L · XL', 'Crewneck "Future Mrs" Pullover.', 40.99, 'images/bachelorette/Sweatshirt-black4.jpg'),
('Bachelorette Pullover', 'Personalized', 'White', 'Bachelorette', 'S · M · L · XL', 'Crewneck "Bachelorette" Pullover.', 40.99, 'images/bachelorette/Sweatshirt-White-1.jpg'),
('Bachelorette Pullover', 'Personalized', 'White', 'Bachelorette', 'S · M · L · XL', 'Crewneck "Bachelorette" Pullover.', 40.99, 'images/bachelorette/Sweatshirt-White-1.jpg'),
('Friends Style Pullover', 'Personalized', 'Black', 'Bachelorette', 'S · M · L · XL', 'Crewneck "Friends Style" Pullover.', 40.99, 'images/bachelorette/Sweatshirt-White-3.jpg'),
('Bride to Be Pullover', 'Personalized', 'Black', 'Bachelorette', 'S · M · L · XL', 'Crewneck "Bride to Be" Pullover.', 40.99, 'images/bachelorette/Sweatshirt-White-4.jpg'),
('Wifey Pullover', 'Personalized', 'White', 'Bachelorette', 'S · M · L · XL', 'Crewneck "Wifey" Pullover.', 40.99, 'images/bachelorette/Sweatshirt-White-wifey-01.jpg'), 
('Future Mrs Pullover', 'Personalized', 'Black', 'Bachelorette', 'S · M · L · XL', 'Crewneck "Future Mrs" Pullover.', 40.99, 'images/bachelorette/Sweatshirt-White-5.jpg')



