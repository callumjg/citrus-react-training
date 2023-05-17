interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title }) => (
  <div className="container py-5">
    <div className="row">
      <div className="col">
        <h1>{title}</h1>
        <h4>React users app</h4>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col">Content</div>
    </div>
  </div>
);

export default Layout;
