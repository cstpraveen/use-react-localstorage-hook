# use-react-localstorage-hook

A React hook to easily manage local storage.

## Installation

```bash
npm install use-react-localstorage-hook
```


## Usage
```bash
import React from 'react';
import useLocalStorage from 'use-react-localstorage-hook';

const App = () => {
  const [name, setName] = useLocalStorage('name', 'John Doe');

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default App;
```