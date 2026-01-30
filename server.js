const express = require("express");
const cors = require("cors");
const fruits = require("./fruits.json");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🍎 Peter Fresh Fruit Market API is running");
});

app.get("/api/fruits", (req, res) => {
  res.json(fruits);
});
app.post("/api/order", (req, res) => {
  const { fruit, name, phone } = req.body;

  console.log("📦 New Order:");
  console.log("Fruit:", fruit);
  console.log("Customer:", name);
  console.log("Phone:", phone);

  res.json({
    message: "Order received! We will contact you shortly."
  });
});


app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
