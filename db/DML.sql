DROP DATABASE IF EXISTS worlddata;
CREATE DATABASE IF NOT EXISTS worlddata;
USE worlddata;
CREATE TABLE IF NOT EXISTS countrycode (
  CountryCode VARCHAR(3) NOT NULL PRIMARY KEY,
  CountryName VARCHAR(100) DEFAULT NULL
);
CREATE TABLE IF NOT EXISTS employment (
  CountryCode VARCHAR(3) NOT NULL PRIMARY KEY,
  Employment_Percent DOUBLE DEFAULT NULL, 
  AgricultureEmployees_Percent DOUBLE DEFAULT NULL, 
  IndustryEmployees_Percent DOUBLE DEFAULT NULL, 
  ServicesEmployees_Percent DOUBLE DEFAULT NULL,
  FOREIGN KEY (CountryCode) REFERENCES countrycode(CountryCode)
);
CREATE TABLE IF NOT EXISTS gdp (
  CountryCode VARCHAR(3) NOT NULL PRIMARY KEY,
  GDP_USD DOUBLE DEFAULT NULL, 
  GDPPerCap_USD DOUBLE DEFAULT NULL, 
  GDPgrowth_Percent DOUBLE DEFAULT NULL,
  FOREIGN KEY (CountryCode) REFERENCES countrycode(CountryCode)
);
CREATE TABLE IF NOT EXISTS geography (
  CountryCode VARCHAR(3) NOT NULL PRIMARY KEY,
  SurfaceArea_km2 DOUBLE DEFAULT NULL, 
  AgricultureLand_Percent DOUBLE DEFAULT NULL, 
  ArableLand_Percent DOUBLE DEFAULT NULL,
  FOREIGN KEY (CountryCode) REFERENCES countrycode(CountryCode)
);
CREATE TABLE IF NOT EXISTS population (
  CountryCode VARCHAR(3) NOT NULL PRIMARY KEY,
  Population DOUBLE DEFAULT NULL, 
  PopDensity_perkm2 DOUBLE DEFAULT NULL, 
  PopGrowth_Percent DOUBLE DEFAULT NULL,  
  BirthRate_Per1000  DOUBLE DEFAULT NULL,  
  DeathRate_Per1000  DOUBLE DEFAULT NULL, 
  LifeExpectancy DOUBLE DEFAULT NULL,
  FOREIGN KEY (CountryCode) REFERENCES countrycode(CountryCode)
);