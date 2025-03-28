import React, { useState } from 'react';
import { readFile, writeFile, editFileContent } from './File';

const FileHandler = () => {
    const [fileContent, setFileContent] = useState('');
    const [findText, setFindText] = useState('');
    const [replaceText, setReplaceText] = useState('');

    const handleFileRead = (event) => {
        const file = event.target.files[0];
        if (file) {
            readFile(file).then((content) => setFileContent(content)).catch(console.error);
        }
    };

    const handleFileWrite = () => {
        writeFile(fileContent);
    };

    const handleEditContent = () => {
        const updatedContent = editFileContent(fileContent, findText, replaceText);
        setFileContent(updatedContent);
    };

    return (
        <div>
            <h1>File Handler</h1>
            <input type="file" accept=".txt" onChange={handleFileRead} />
            <textarea
                rows="10"
                cols="50"
                value={fileContent}
                onChange={(e) => setFileContent(e.target.value)}
                placeholder="File content will appear here"
            ></textarea>
            <br />
            <input
                type="text"
                placeholder="Find text"
                value={findText}
                onChange={(e) => setFindText(e.target.value)}
            />
            <input
                type="text"
                placeholder="Replace with"
                value={replaceText}
                onChange={(e) => setReplaceText(e.target.value)}
            />
            <button onClick={handleEditContent}>Edit Content</button>
            <button onClick={handleFileWrite}>Save File</button>
        </div>
    );
};

export default FileHandler;
