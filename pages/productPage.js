import Head from "next/head";
import SpecificProdut from "../components/SpecificProduct";

export default function ProductPage() {
  return (
    <div>
      <Head>
        <title>MaPlantinhas</title>
        <meta name="MaPlantinhas" content="Compre plantas sem sair de casa!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SpecificProdut
        id= {1}
      />
    </div>
  );
}
