import React,{useEffect} from 'react';
import Pages from "./pages"

function App() {
  useEffect(() => {
  const script = document.createElement('script');
  script.src = "./js/main.js";
  script.async = true;
  document.body.appendChild(script);
// return () => {
//     document.body.removeChild(script);
//   }
}, []);
  return (
    <Pages />
    

  );
}

export default App;
