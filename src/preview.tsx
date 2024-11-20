import { marked } from "marked";

export default function PreviewElements(){
    const input = document.getElementById('editor');
    console.log("previewed !")
    const output = document.getElementById('preview');
  
    marked.setOptions({
        gfm: true,
        breaks: true,
    });
    if (input && output){
        input.addEventListener('input', function() {
            const markdownText = (input as HTMLInputElement).value;
            const htmlContent = marked(markdownText);
            output.innerHTML = htmlContent;
        });
    }
}