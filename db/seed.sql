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
('The Harley', 'Floral', 'Yellow', 'Headband', 'one size', 'Floral Knotted Headband with cushioned ends.', 12.99, 'images/headband/The-Harley.jpg')
('Cosmetic Bag', 'Personalized', 'Natural', 'Bachelorette', 'one size', 'Personalized cosmetic bags.', 12.99, 'images/bachelorette/cosmetic_bags.jpeg')
('Tank Tops', 'Personalized', 'Black', 'Bachelorette', '15.99', 'Personalized tank tops with Taylor Swift quotes.', 12.99, 'images/bachelorette/tank-top.jpeg')
('', 'Personalized', '', 'Bachelorette', '', 'Personalized .', 12.99, 'images/bachelorette/.jpeg')
('', 'Personalized', '', 'Bachelorette', '', 'Personalized .', 12.99, 'images/bachelorette/.jpeg')


