import Header from "@/components/Header";
import Main from "@/components/Main";
import Container from "@/components/ui/container";
import { ThemeProvider } from "next-themes";

export default function Home({ data }: any) {
  return (
    <Container>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <Main data={data} />
      </ThemeProvider>
    </Container>
  );
}

export const getServerSideProps = async function() {
  const response = await fetch("https://fantasy.premierleague.com/api/bootstrap-static/");
  const data = await response.json();
  return { props: { data } };
};