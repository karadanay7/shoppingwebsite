import Stripe from "stripe";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const stripe = new Stripe(
    "sk_test_51NxDp0AAKhbCCBVXwGrlRcaa7HTl0F1YGd3IUGIg2KLSpk7nb2s78LlY3tn1P8toEhnb6HP4hd4WZX5SowYlJPbP00WsjfE6u0"
  );

  return await stripe.paymentIntents.create({
    amount: Number(body.amount),
    currency: "usd",
    automatic_payment_methods: { enabled: true },
  });
});
