import './layout.css';
import Header from './Header';
import Footer from './Footer';
const Layout = props => {
  return (
    <div className="layout">
      <Header></Header>
     {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
