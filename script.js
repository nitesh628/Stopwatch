let [minute, second] = [0, 0];                          // Intializing the variable for min and sec
let timer = document.querySelector("#timer");           // Selecting the timer display element by using id
let int = null;                                         // Created variable to store the interval ID


// Event listener to start the button
document.getElementById("start-btn").addEventListener("click", () => {
    if (int != null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 1000);
});

// Event listener to stop the button
document.getElementById("stop-btn").addEventListener("click", () => {
    clearInterval(int);
});

// Event listener to reset the button
document.getElementById("reset-btn").addEventListener("click", () => {
    clearInterval(int);
    [minute, second] = [0, 0];
    timer.innerHTML = "00:00";
});

// Function to update the timer display
function displayTimer() {
    second++;                       // Incrementing the second
    if (second == 60) {               // If second reached 60 it will be converted to the minute
        second = 0;
        minute++;
    }
    let m = minute < 10 ? `0${minute}` : minute;
    let s = second < 10 ? `0${second}` : second;
    // Here updating the timer display
    timer.innerHTML = `${m}:${s}`;
}