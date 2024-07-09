import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const {
    data: pieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  if (error) return <div>falied to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <GlobalStyle />
      <Component pieces={pieces} {...pageProps} />
    </Layout>
  );
}
