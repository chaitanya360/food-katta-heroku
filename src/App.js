import "./App.css";
import ProductPage from "./pages/ProductPage";
import Router from "./Router";
// import "./assets/scss/auth.scss";

function App() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--grd-form-pink-bg)" }}>
      <Router />
    </div>
  );
}

export default App;
