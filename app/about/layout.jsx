import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Aulia Ilmi Maghfira Ridwan"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
