document.getElementById('logButton').addEventListener('click', function() {
    const sleep = document.getElementById('sleep').value;
    const water = document.getElementById('water').value;
    const exercise = document.getElementById('exercise').value;

    if (sleep === "" || water === "" || exercise === "") {
        alert("Please fill in all fields");
        return;
    }

    const logEntry = `Sleep: ${sleep} hours, Water: ${water} litres, Exercise: ${exercise} minutes`;
    
    const listItem = document.createElement('li');
    listItem.textContent = logEntry;

    const healthLog = document.getElementById('health-log');
    healthLog.appendChild(listItem);

    // Clear the input fields
    document.getElementById('sleep').value = '';
    document.getElementById('water').value = '';
    document.getElementById('exercise').value = '';
});
