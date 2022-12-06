import React from "react";

export default function Login() {
  return (

  	<div>
      <Head>
        <title>Login</title>
        <meta name="MaPlantinhas" content="Compre plantas sem sair de casa!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeCarousel />
      <HomeCategories />
      <Products
        title="Produtos em promoção"
        background="var(--color-secondary)"
      />
      <Products
        title="Plantas para apartamento"
        background="var(--color-secondary-ultra-light)"
        light
      />
    </div>


  	);
}
