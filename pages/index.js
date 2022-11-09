import Head from "next/head";
import HomeCarousel from "../components/HomeCarousel";
import HomeCategories from "../components/HomeCategories";
import Products from "../components/Products";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MaPlantinhas</title>
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
