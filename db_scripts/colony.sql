USE world;

CREATE TABLE Customers
(
    Id INT PRIMARY KEY AUTO_INCREMENT,
    WindSpeed INT,
    
    CommonTemperature INT,
    CommonHumidity INT,
    
    SubstrateTemperature INT,
    SubstrateHumidity INT,
    
    LastName VARCHAR(20)
);