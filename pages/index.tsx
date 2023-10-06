import Header from "@/components/Header";
import Main from "@/components/Main";
import Container from "@/components/ui/container";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <Container>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <Main />
      </ThemeProvider>
    </Container>
  );
}
