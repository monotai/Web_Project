// fileUtils.js

export const readFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsText(file);
    });
};

export const writeFile = (content) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'file.txt';
    link.click();
    URL.revokeObjectURL(url);
};

export const editFileContent = (originalContent, find, replace) => {
    return originalContent.replace(new RegExp(find, 'g'), replace);
};
