const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51K0gT5HSARKgNzPYcbFwMPDzSysMh6HAWAXG7NyM2GBgiaJfEwwiwpOEbiLLP34SToXv8yW36kSZAkjgHl8A6KjM00Wewbrdlt"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// app.get("/ganesh", (request, response) =>
//   response.status(200).send("hello ganesh")
// );

app.post("/payments/create", async (request, response) => {
  const total = request.query.total; // or can use request params as well
  console.log("Payment Request Received for this Amount: ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen
exports.api = functions.https.onRequest(app); // exports.api is the reason for /api in the endpoint

// Example Endpoint
// http://localhost:8000/ecommerce-4d68b/us-central1/api
