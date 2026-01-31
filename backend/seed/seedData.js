const mongoose = require("mongoose");
require("dotenv").config();
const MenuItem = require("../models/MenuItem");
const Order = require("../models/Order");
require("../config/db")();

const seed = async () => {
  await MenuItem.deleteMany();
  await Order.deleteMany();

  const menu = await MenuItem.insertMany([
    {
      name: "Paneer Butter Masala",
      category: "Main Course",
      price: 250,
      ingredients: ["Paneer", "Butter", "Tomato"]
    },
    {
      name: "Veg Burger",
      category: "Appetizer",
      price: 120,
      ingredients: ["Bun", "Patty"]
    },
    {
      name: "Cold Coffee",
      category: "Beverage",
      price: 90
    }
  ]);

  await Order.create({
    orderNumber: "ORD-1001",
    items: [
      { menuItem: menu[0]._id, quantity: 1, price: 250 }
    ],
    totalAmount: 250,
    customerName: "Ram",
    tableNumber: 5
  });

  console.log("Seed data inserted");
  process.exit();
};

seed();
