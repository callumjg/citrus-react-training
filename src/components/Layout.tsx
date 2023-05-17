interface LayoutProps {
  title: string;
  subtitle?: string;
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  title,
  subtitle,
  children,
}) => (
  <div className="container py-5">
    <div className="row">
      <div className="col">
        <h1>{title}</h1>
        {subtitle && <h4>{subtitle}</h4>}
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col">{children}</div>
    </div>
  </div>
);

export default Layout;
