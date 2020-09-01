# NuCo = Nutritional Code
Why search for a special product if you only need the calories or ingredients ? Just scan a QR-code!

Proposal:

For processed foods, instead of searching for a specific product (e.g.yogurt of a certain brand), we just want to encode the nutritional information in both a human readable code and a machine readable code.

Example:


Chobani Vanilla Blended Non-Fat Greek Yogurt (32 oz)
For 100g product, this means:

calories:57kcal
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

The units could be implicit. Then use `JSON.stringify()` and encode this string into a qr code:

![Nutritional Value JSON in QR Form](https://github.com/TetsuGuy/nuco/blob/master/QRCode.PNG)

People can then just weigh the amount of food they want to consume from this product with a kitchen scale.
The QR-Code/Reader is easy to include in fitness/health/diet-apps and people would only need to search for unprocessed foods without
nutritional labe (e.g. "Potato", "Apple").

Side Note:

When i came up with this idea, originally i thought of Google's way to encode a specific Point in Google Maps to like 3 words of human readable language.
For example, the point of White House, Washington would be: 38°53'51.7"N 77°02'11.5"W encoded into "dog banana three". 
Similar to this approach: https://tools.ietf.org/html/rfc1751 for remembering passwords.

Room for improvement:

The JSON Object Notation is not necessarily the best option. Just as well there could be just the array of numbers, as long as we are able to infer what kind of nutritional key the number is assigned to.

{
  calories: 57,
  fat: 0,
  carbs:6,
  protein:14,
}

would become:

[57,0,7,14]

or as QR Code:

![Nutritional Value JSON in QR Form smaller](https://github.com/TetsuGuy/nuco/blob/master/QRCode2.PNG)




