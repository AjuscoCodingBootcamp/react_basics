import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(1000);

  // Similar a componentDidMount y componentDidUpdate:  
  useEffect(() => {   
         // Actualiza el título del documento usando la Browser API   
         console.log("cambió el estado y se prendió el hook de effect")
          document.title = `You clicked ${count} times`;  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export {Counter}