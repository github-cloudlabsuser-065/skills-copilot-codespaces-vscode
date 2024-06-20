function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleInputChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleInputChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
}

export default MarkdownEditor;

const sentence = "Hello, world!";
const reversedSentence = sentence.split('').reverse().join('');
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

console.log(capitalizedSentence);



const nestedData = [
    [{ name: 'John' }, { name: 'Jane' }],
    [{ name: 'Bob' }]
];
const names = nestedData.flatMap(arr => arr.map(item => item.name));
console.log(names);
  
