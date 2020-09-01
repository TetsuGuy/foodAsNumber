# NuCo
why search for a special product if you only need the calories or ingredients ? just scan a qr code!

Proposal:

For processed foods, instead of searching for a specific product (e.g.yogurt of a certain brand), we just want to encode the nutritional information in both a human readable code and a machine readable code.

Example:


Chobani Vanilla Blended Non-Fat Greek Yogurt (32 oz)
For 100g product, this means:

calories:57
fat: 0g
carbs:6g
protein:14g

We can just process the properties of this chart into JSON:

{
  calories: 57,
  fat: 0,
  carbs:6,
  protein:14,
}

Then use `JSON.stringify()` and encode this string into a qr code.
People can then just weigh the amount of food they want to consume from this product with a kitchen scale.
The QR-Code/Reader is easy to include in fitness/health/diet-apps and people would only need to search for unprocessed foods without
nutritional label, e.g. "Potato", "Apple", etc.

