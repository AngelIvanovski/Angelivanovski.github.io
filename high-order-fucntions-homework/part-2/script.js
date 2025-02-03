let urlCarts = "https://dummyjson.com/carts";

fetch(urlCarts)
  .then((response) => response.json())
  .then((data) => {
    const carts = data.carts;
    console.log(carts);

    // All product titles in all carts
    const productTitles = carts.flatMap((cart) =>
      cart.products.map((c) => c.title)
    );
    console.log(productTitles);
    //

    // The total quantity of all products purchased

    const totalQuantityOfProducts = carts
      .map((c) => c.totalQuantity)
      .reduce((acc, curr) => acc + curr);
    console.log(totalQuantityOfProducts);

    //Check if there is any cart with a total value above $100,000

    const cartValueOver100K = carts.some((c) => c.total > 100_000);
    console.log(cartValueOver100K);
    //

    //The total revenue from all carts (sum of all discountedTotal values)

    const sumOfAllDiscountedValues = carts
      .map((c) => c.discountedTotal)
      .reduce((acc, curr) => acc + curr);
    console.log(sumOfAllDiscountedValues);
    //

    // The cart with the highest total value

    const maxPrice = carts
      .flatMap((c) => c.products.map((p) => p.total))
      .reduce((acc, curr) => Math.max(acc, curr));

    console.log(maxPrice);
    //

    // Find all products with a discount greater than 15%

    const discountGreaterThan15 = carts
      .flatMap((c) => c.products)
      .filter((c) => c.discountPercentage > 15);
    console.log(discountGreaterThan15);
    //

    //  The user ID of the cart with the highest total quantity

    const userIdWithHighestQuantity = carts.sort(
      (a, b) => b.totalQuantity - a.totalQuantity
    );
    console.log(userIdWithHighestQuantity[0].userId);

    //The most expensive product in all carts (before discount)

    const mostExpensiveBeforeDiscount = carts
      .flatMap((c) => c.products)
      .sort((a, b) => b.price - a.price);
    console.log(mostExpensiveBeforeDiscount[0]);
    //

    // The average discounted total per cart

    const averageDiscountedPrice =
      carts.reduce((acc, curr) => acc + curr.discountedTotal, 0) / carts.length;
    console.log(averageDiscountedPrice);

    const mostExpensiveAfterDiscount = carts
      .flatMap((c) => c.products)
      .sort((a, b) => b.discountedTotal - a.discountedTotal)
      .slice(0, 3);
    console.log(mostExpensiveAfterDiscount);
    //
  })
  .catch((error) => console.error("Error fetching data:", error));
