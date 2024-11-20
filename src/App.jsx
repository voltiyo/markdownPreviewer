import { useState } from 'react';
import './App.css'  
import PreviewElements from "./preview";
import { marked } from 'marked';


// Attach the mousedown event to start dragging



function App() {

  const markdownContent = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

\`\`\`![Image Title](Link_Of_Image)\`\`\` 
`;
  marked.setOptions({
      gfm: true,
      breaks: true,
  })

  return (
    <div className='container'>
      <h6>By safouane</h6>
    <div className='editor-container'>
      <nav>Editor</nav>
      <textarea id="editor" onInput={PreviewElements} defaultValue={markdownContent} ></textarea>
    </div>
      
      <div className="preview-container" id='preview-cont'>
        <nav>Preview</nav>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdownContent)}}>

        </div>
      </div>
    </div>
  )
}

export default App;
