import React, {useEffect} from 'react';

const useScript = (src, integrity, crossOrigin="anonymous") => {
  useEffect(() => {
    const script=document.createElement("script");
    script.src= "https://cdn.jsdeliver.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" ;
    script.integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjxkk+Q2h455rYXK/7HAuoJl+0I4";
    script.crossOrigin=crossOrigin;
    document.body.appendChild(script);
    return () => {
        document.body.removeChild(script);
    };
  }, [src, integrity, crossOrigin]);
}

export default useScript;