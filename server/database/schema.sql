CREATE TABLE account (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(500) NOT NULL,
  picture VARCHAR(2000) NOT NULL
);

CREATE TABLE travel (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  city VARCHAR(255) NOT NULL,
  date_start DATE NOT NULL,
  date_end DATE NOT NULL,
  picture VARCHAR(1000) NOT NULL,
  state  VARCHAR(255) NOT NULL,
  account_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (account_id) REFERENCES account(id)
);

CREATE TABLE activity (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  price VARCHAR(50) NOT NULL,
  neighborhood VARCHAR(250) NOT NULL,
  link VARCHAR(2000) NOT NULL,
  comment VARCHAR(1000) NOT NULL,
  account_id INT UNSIGNED NOT NULL,
  travel_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (account_id) REFERENCES account(id),
  FOREIGN KEY (travel_id) REFERENCES travel(id)
);

CREATE TABLE operation_association (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  account_id INT UNSIGNED NOT NULL,
  travel_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (account_id) REFERENCES account(id),
  FOREIGN KEY (travel_id) REFERENCES travel(id)
);

CREATE TABLE operation_friend (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  status VARCHAR(250),
  account_id1 INT UNSIGNED NOT NULL,
  account_id2 INT UNSIGNED NOT NULL,
  FOREIGN KEY (account_id1) REFERENCES account(id),
  FOREIGN KEY (account_id2) REFERENCES account(id)
);


-- INSERT INTO moderator (moderator_mail, moderator_password) VALUES ('moderator1@example.com', 'password123'), ('moderator2@example.com', 'password456'), ('moderator3@example.com', 'password789');
-- INSERT INTO parent (parent_firstname, parent_lastname, parent_adress, parent_phone, parent_mail, parent_password) VALUES ('John', 'Doe', '123 Main St, Cityville', '1234567890', 'john.doe@example.com', 'password123'), ('Jane', 'Smith', '456 Elm St, Townsville', '2345678901', 'jane.smith@example.com', 'password456'), ('Emily', 'Johnson', '789 Oak St, Villagetown', '3456789012', 'emily.johnson@example.com', 'password789'); 
-- INSERT INTO child (child_firstname, child_lastname, child_birth, walk_status, clean_status, parent_id) VALUES ('Alice', 'Doe', '2020-01-01', 1, 1, 1), ('Bob', 'Smith', '2019-05-15', 1, 1, 2), ('Charlie', 'Johnson', '2021-09-30', 0, 0, 3); 
-- INSERT INTO allergy (gluten, fruitsacoque, crustaces, celeri, oeufs, moutarde, poissons, soja, lait, sulfites, sesame, lupin, arachides, mollusques, autres, child_id) VALUES (1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Autre allergie 1', 1), (0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 'Autre allergie 2', 2), (0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 'Autre allergie 3', 3);
-- INSERT INTO nursery (nursery_name, nursery_street, nursery_street_number, latitude, longitude, capacity, price, activity1, nursery_phone, nursery_mail, image1, image2, image3, nursery_password, activity2, activity3, certification1, certification2, certification3) VALUES ('Happy Kids Nursery', '123 Happy St', 1, 40, -74, 50, 1000, 'Painting', 1234567890, 'contact@happykids.com', 'image1.jpg', 'image2.jpg', 'image3.jpg', 'password123', 'Singing', 'Dancing', 'Certification A', 'Certification B', 'Certification C'), ('Little Stars Nursery', '456 Star Ave', 2, 41, -73, 60, 1200, 'Reading', 2345678901, 'info@littlestars.com', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'password456', 'Drawing', 'Crafting', 'Certification D', 'Certification E', 'Certification F'), ('Bright Minds Nursery', '789 Bright Rd', 3, 42, -72, 70, 1400, 'Sports', 3456789012, 'support@brightminds.com', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'password789', 'Music', 'Math', 'Certification G', 'Certification H', 'Certification I'); 
-- Peuplement de la table account
-- INSERT INTO account (role, nursery_id, moderator_id, parent_id) VALUES ('parent', NULL, NULL, 1), ('parent', NULL, NULL, 2), ('parent', NULL, NULL, 3), ('moderator', NULL, 1, NULL), ('moderator', NULL, 2, NULL), ('moderator', NULL, 3, NULL), ('nursery', 1, NULL, NULL), ('nursery', 2, NULL, NULL), ('nursery', 3, NULL, NULL); 
-- Peuplement de la table operation_management
-- INSERT INTO operation_management (operation_management_date, type, account_id, moderator_id) VALUES ('2023-06-14 08:30:00', 'Login', 1, NULL), ('2023-06-14 09:00:00', 'Logout', 2, NULL), ('2023-06-14 09:30:00', 'Login', 3, NULL), ('2023-06-14 10:00:00', 'Login', 4, 1), ('2023-06-14 10:30:00', 'Logout', 5, 2), ('2023-06-14 11:00:00', 'Login', 6, 3); 
-- Peuplement de la table booking_operation
-- INSERT INTO booking_operation (booking_operation_date, state, nursery_id, account_id, moderator_id) VALUES ('2023-06-14 08:30:00', 'Pending', 1, 7, 1), ('2023-06-14 09:00:00', 'Confirmed', 2, 8, 2), ('2023-06-14 09:30:00', 'Cancelled', 3, 9, 3);
