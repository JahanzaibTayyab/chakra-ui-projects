import ChakraWrapper from "@/components/chakraWrapper";
import NavBar from "@/components/navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraWrapper>
          <NavBar />
          {children}
        </ChakraWrapper>
      </body>
    </html>
  );
}
