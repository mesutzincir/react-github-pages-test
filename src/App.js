import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome github pages test</h2>
        <ul>
          <li>create-react-app react-github-pages-test</li>
          <li>cd react-github-pages-test</li>
          <li>git init</li>
          <li>git add .</li>
          <li>git commit -m "first commit"</li>
          <li>git remote add origin https://github.com/mesutzincir/react-github-pages-test.git</li>  
          <li>git push -u origin master</li>       
          <li>npm install --save gh-pages</li> 
          <li>add "homepage":"https://mesutzincir.github.com/react-github-pages-test/" below name in package.json</li>
          <li>add "predeploy":"npm run build" scripts section in package.json</li>
          <li>add "deploy":"gh-pages -d build" scripts section in package.json</li>
          <li>npm run deploy</li>
         <li></li>
        </ul>       
      </header>
    </div>
  );
}

export default App;
