import React, {useState, lazy, Suspense} from 'react';
import './App.css';
import Loading from "./HOC/Loading";

const Test = lazy(() => import('./containers/Test'));
const Test2 = lazy(() => import('./containers/Test2'));

function App() {
  const [width, setWidth] = useState(document.body.clientWidth);
  let Frame = null;

    window.addEventListener("resize", function(event) {
      setWidth(document.body.clientWidth);
    });
    if(width >= 770){
      Frame = <Test/> ;
    }else{
      console.log("alright", width);
      Frame = <Test2/> ;
    }

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        {Frame}
      </Suspense>
    </div>
  );
}

export default App;
