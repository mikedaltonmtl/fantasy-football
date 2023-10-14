import Header from "@/components/Header";
import Main from "@/components/Main";
import Wordle from "@/components/Wordle";
import { ThemeProvider } from "next-themes";
import { useState } from "react";

export default function Home({ data }: any) {
  const [show, setShow] = useState("Teams");
  
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header setShow={setShow} />
      {show === "Teams" && <Main data={data} />}
      {show === "Wordle" && <Wordle />}
    </ThemeProvider>
  );
}

export const getServerSideProps = async function() {
  const response = await fetch("https://fantasy.premierleague.com/api/bootstrap-static/");
  const data = await response.json();
  return { props: { data } };
};