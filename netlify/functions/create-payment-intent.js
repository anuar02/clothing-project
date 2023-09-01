require("dotenv").config();

const stripe = require("stripe")(
  "sk_test_51NkrXBCInNys6Uxx3nnZOTEUDunG6wpmLt9ymRqhGHeThWA0jc0FZlIYnte81NOBQVcahUgl3FY1QujKPNUiKej600Q9x7BToy"
);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntent.create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
    });

    return { statusCode: 200, body: JSON.stringify({ paymentIntent }) };
  } catch (error) {
    console.log(error);
    return { statusCode: 400, body: JSON.stringify({ error }) };
  }
};
