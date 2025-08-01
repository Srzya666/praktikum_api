module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("Transaction", {
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
  });
  Transaction.associate = (models) => {
    // Transaction.belongsTo(models.User);
    // Transaction.belongsTo(models.Product);
  };

  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  User.associate = (models) => {
    // User.hasMany(models.Transaction);
  };

  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
  });
  Product.associate = (models) => {
    // Product.hasMany(models.Transaction);
  };

  return {Transaction,User,Product};
};
