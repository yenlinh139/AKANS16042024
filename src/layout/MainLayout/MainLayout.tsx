import { memo, ReactNode } from "react";
import Footer from "../Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children, ...props }: MainLayoutProps) => {
  return (
    <div {...props}>
      {children}
      <Footer />
    </div>
  );
};

export default memo(MainLayout);
