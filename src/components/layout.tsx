import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-800 min-h-screen h-full">
      <Header />
      <main className="main-content flex flex-col flex-grow p-4 xl:p-0 container mx-auto text-zinc-300">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
