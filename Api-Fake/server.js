const express = require ('express');
const faker = require ('faker');
const app = express();
const port = 8000;

class Usuario {
    constructor (){
        this.carnet = faker.datatype.uuid();
        this.name=faker.name.firstName();
        this.lastname=faker.name.lastName();
        this.phone=faker.phone.phoneNumber();
        this.mail=faker.internet.email();
        this.password=faker.internet.password();
    }
}

class Empresa {
    constructor (){
        this.carnet = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.streetname =faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipcode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

app.get('/api', (req, res) => {
    res.json({message: 'Estamos inicializando nuestra api con express'})
})

app.listen(port, () => console.log('Hola Julio'))
  
  app.get("/api/users/new", (req, res) => {
    usersnew =  new Usuario();
    res.json(usersnew);
  });

  app.get("/api/companies/new", (req, res) => {
    companynew =  new Empresa();
    res.json(companynew);
  });

  app.get("/api/user/company/new", (req, res) => {
      companynew = new Empresa();
      usernew = new Usuario();
      array = [usernew,companynew];
      res.json(array);
  });