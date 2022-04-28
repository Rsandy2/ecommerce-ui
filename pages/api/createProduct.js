const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const {
    isbn,
    title,
    author,
    publishedDate,
    description,
    language,
    image,
    price,
  } = req.body;
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const product = await stripe.products.create({
        name: title,
        description,
        images: [image],
        metadata: {
          isbn,
          author,
          publishedDate,
          language,
          image,
          price,
        },
      });

      res.status(200).json({ message: product });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
