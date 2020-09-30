CREATE DATABASE Store;
CREATE TABLE Products (
  Item_Number int not null ,
  Item_Name varchar(255),
  Description varchar(255),
  Image_Name  varchar(255),
  PRIMARY KEY (Item_Number)
);
