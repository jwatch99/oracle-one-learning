document.addEventListener("DOMContentLoaded", function() {
    // Must add manually files due to still being new to web development and GitHub limitations
    const jsFiles = [
        "helloworld.js",
        "variables_1.js",
        "variables_2.js",
        "variables_3.js",
        "variables_string-w-brackets.js",
        "variables_arrays.js"
    ];

    const jsFilesDropdown = document.getElementById("js-files");

    jsFiles.forEach(file => {
        const option = document.createElement("option");
        option.value = file;
        option.textContent = file;
        jsFilesDropdown.appendChild(option);
    });
});

function loadJSFile() {
    const selectedFile = document.getElementById("js-files").value;
    const editorArea = document.getElementById("editor");

    fetch(`js codes/${selectedFile}`)
        .then(response => response.text())
        .then(code => {
            editorArea.value = code;
            autoResize(editorArea);
        })
        .catch(error => {
            console.error('Error loading file:', error);
        });
}

function executeCode() {
    const editorArea = document.getElementById("editor");
    const outputArea = document.getElementById("output");
    const code = editorArea.value;

    try {
        const result = eval(code);
        outputArea.value = result !== undefined ? result : "Executed successfully, but no output";
    } catch (error) {
        outputArea.value = `Error: ${error.message}`;
    }
    autoResize(editorArea);
    
}
function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}