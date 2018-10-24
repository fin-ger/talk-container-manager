var form = document.getElementById('toolbar');
var consoleFrame = document.getElementById('console');
var nameInput = document.getElementById('name');
var runButton = document.getElementById('run');
var disabled = false;

form.addEventListener('submit', function(event) {
    if (!disabled) {
        disabled = true;
        nameInput.disabled = true;
        runButton.disabled = true;
        consoleFrame.src = document.location.origin + '/terminal/' + nameInput.value;
        consoleFrame.onload = () => {
            disabled = false;
            nameInput.disabled = false;
            runButton.disabled = false;
        };
    }

    event.preventDefault();
}, false);
