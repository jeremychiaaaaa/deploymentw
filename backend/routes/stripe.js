const express = require("express");

const Stripe = require('stripe')
require("dotenv").config();


const stripe = Stripe('sk_test_51KsJX8G0NLJrCIObr7x2kITD13A0LBcx41JhuYFqxv2nzPkVtBImfZC3ioaN15a84yhbbzopejk7eHqri4EKhnwo00xUyUDDPe');
console.log(stripe)
const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const line_items  = req.body.cartItems.filter((i,index) => index!==0).map((item,index) => {
    return {
        price_data:{
            currency:"usd",
            product_data:{
                name: item.title,
                images:[item.image]
            },
            unit_amount:4000,
        },
        quantity:item.number
    }
})
  

  const session = await stripe.checkout.sessions.create({

    line_items,
    mode: "payment",
    payment_intent_data: {
      //this email will only be sent when it is in live mode (can test before the launch w live mode)
      receipt_email: req.body.email
    },

    success_url: 'https://musical-melomakarona-3cc7e7.netlify.app/checkout-success',
    cancel_url: 'https://musical-melomakarona-3cc7e7.netlify.app/merch/checkout',
  });

  // res.redirect(303, session.url);
  res.send({ url: session.url });
});

// Create order function


module.exports = router;
