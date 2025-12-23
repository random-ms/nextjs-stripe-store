import { ProductDetail } from "@/components/product-detail";
import { stripe } from "@/lib/stripe";
import React from "react";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product)); // removes error
  return <ProductDetail product={plainProduct} />;
}

// Product page is a server component,
// Product detail will be a client component that will display data.
