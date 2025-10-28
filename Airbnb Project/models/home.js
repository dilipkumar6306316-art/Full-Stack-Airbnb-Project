// Core Modules
const db = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(houseName, price, location, rating, photo, description, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photo = photo;
    this.description = description;
    this.id = id;
  }



  
  // jab koi save karne ki kosis ker rha hai tb bhi
  save() {






    if (this.id) { // update

      return db.execute('UPDATE homes SET houseName=?, price=?, location=?, rating=?, photo=?, description=? WHERE id=?', [this.houseName,
         this.price,
          this.location, 
          this.rating, 
          this.photo, 
          this.description, 
          this.id
        ]);

    } else { // insert
      return db.execute('INSERT INTO homes (houseName, price, location, rating, photo, description) VALUES (?, ?, ?, ?, ?, ?)', [this.houseName, 
        this.price, 
        this.location, 
        this.rating, 
        this.photo, 
        this.description
      ]);
    }
  }











  static fetchAll() {
    return db.execute('SELECT * FROM homes');






  }

  static findById(homeId) {
    return db.execute('SELECT * FROM homes WHERE id=?', [homeId]);
  }

  static deleteById(homeId) {
    return db.execute('DELETE FROM homes WHERE id=?', [homeId]);
  }
};