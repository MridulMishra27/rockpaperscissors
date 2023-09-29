
        // Initializing variables to store username and scores
        let username = "";
        let userScore = 0;
        let computerScore = 0;

        function startGame() {
            // Get the username from the input field
            username = document.getElementById("username").value;
            document.getElementById("displayUsername").innerHTML = `Player: ${username}`;

            // Show the hidden elements
            document.querySelector(".container").style.display = "block";
            document.querySelector(".username").style.display = "none";
            document.querySelector(".result").style.display = "center";
            document.querySelector(".game").style.display = "block";
            document.querySelector(".img").style.display = "block";

            // Enable the image buttons
            document.querySelectorAll(".img img").forEach(img => img.style.pointerEvents = "auto");
        }

        function updateCrown() {
            const playerScore = parseInt(document.querySelector("#gamePlayerScore").innerHTML);
            const computerScore = parseInt(document.querySelector("#gameComputerScore").innerHTML);

            const playerCrown = document.querySelector("#playerCrown");
            const computerCrown = document.querySelector("#computerCrown");

            if (playerScore > computerScore) {
                playerCrown.style.display = "inline"; // Display player's crown
                computerCrown.style.display = "none"; // Hide computer's crown
            } else if (computerScore > playerScore) {
                playerCrown.style.display = "none"; // Hide player's crown
                computerCrown.style.display = "inline"; // Display computer's crown
            } else {
                playerCrown.style.display = "none"; // Hide both crowns if scores are equal
                computerCrown.style.display = "none";
            }
        }

        function updateLeaderboard(resultText) {
            const listItem = document.createElement("li");
            listItem.textContent = `⏱${getCurrentTime()}: ${resultText}`;

            const leaderboardList = document.getElementById("leaderboardList");
            leaderboardList.appendChild(listItem);
        }

        function getCurrentTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        }

        function case1() {
            let userChoice = 0; // 0 represents "Rock"
            let compChoice = Math.floor(Math.random() * 3);

            if (userChoice === compChoice) {
                document.getElementById("result").innerHTML = "Match Draw";
                updateLeaderboard(`${username} choses Rock against Computer's ${getChoiceName(compChoice)}`);
            } else if ((userChoice === 0 && compChoice === 2) || (userChoice === 1 && compChoice === 0) || (userChoice === 2 && compChoice === 1)) {
                document.getElementById("result").innerHTML = ` ${username} Wins `;
                let score = parseInt(document.querySelector("#myscore").innerHTML);
                score++;
                document.querySelector("#myscore").innerHTML = score;
                document.querySelector("#gamePlayerScore").innerHTML = score; // Update player score in "GAME STATS"
                updateLeaderboard(`${username} Wins with Rock against Computer's ${getChoiceName(compChoice)}`);
            } else {
                document.getElementById("result").innerHTML = "Computer Wins";
                let score = parseInt(document.querySelector("#comScore").innerHTML);
                score++;
                document.querySelector("#comScore").innerHTML = score;
                document.querySelector("#gameComputerScore").innerHTML = score; // Update computer score in "GAME STATS"
                updateLeaderboard(`${username} Loses with Rock against Computer's ${getChoiceName(compChoice)}`);
            }

            //  To Update the displayed choices
            document.getElementById("user").src = "rock.png";
            if (compChoice === 0) {
                document.getElementById("comp").src = "rock.png";
            } else if (compChoice === 1) {
                document.getElementById("comp").src = "paper.png";
            } else {
                document.getElementById("comp").src = "scissor.png";
            }
            updateCrown();
        }

        function case2() {
            let userChoice = 1; // 1 represents "Paper"
            let compChoice = Math.floor(Math.random() * 3);

            if (userChoice === compChoice) {
                document.getElementById("result").innerHTML = "Match Draw";
                updateLeaderboard(`Draw ${username} choses Paper against Computer's ${getChoiceName(compChoice)}`);

            } else if ((userChoice === 1 && compChoice === 0) || (userChoice === 2 && compChoice === 1) || (userChoice === 0 && compChoice === 2)) {
                document.getElementById("result").innerHTML = `${username} Wins`;
                let score = parseInt(document.querySelector("#myscore").innerHTML);
                score++;
                document.querySelector("#myscore").innerHTML = score;
                document.querySelector("#gamePlayerScore").innerHTML = score; // Update player score in "GAME STATS"
                updateLeaderboard(`${username} Wins with Paper against Computer's ${getChoiceName(compChoice)}`);

            } else {
                document.getElementById("result").innerHTML = "Computer Wins";
                let score = parseInt(document.querySelector("#comScore").innerHTML);
                score++;
                document.querySelector("#comScore").innerHTML = score;
                document.querySelector("#gameComputerScore").innerHTML = score; // Update computer score in "GAME STATS"
                updateLeaderboard(`${username} Loses with Paper against Computer's ${getChoiceName(compChoice)}`);

            }

            // To Update the displayed choices
            document.getElementById("user").src = "paper.png";
            if (compChoice === 0) {
                document.getElementById("comp").src = "rock.png";
            } else if (compChoice === 1) {
                document.getElementById("comp").src = "paper.png";
            } else {
                document.getElementById("comp").src = "scissor.png";
            }
            updateCrown();
        }

        function case3() {
            let userChoice = 2; // 2 represents "Scissors"
            let compChoice = Math.floor(Math.random() * 3);

            if (userChoice === compChoice) {
                document.getElementById("result").innerHTML = "Match Draw";
                updateLeaderboard(`Draw ${username} choses Scissors against Computer's ${getChoiceName(compChoice)}`);

            } else if ((userChoice === 2 && compChoice === 0) || (userChoice === 0 && compChoice === 2) || (userChoice === 1 && compChoice === 1)) {
                document.getElementById("result").innerHTML = `${username} Wins`;
                let score = parseInt(document.querySelector("#myscore").innerHTML);
                score++;
                document.querySelector("#myscore").innerHTML = score;
                document.querySelector("#gamePlayerScore").innerHTML = score; // Update player score in "GAME STATS"
                updateLeaderboard(`${username} Wins with Scissors against Computer's ${getChoiceName(compChoice)}`);

            } else {
                document.getElementById("result").innerHTML = "Computer Wins";
                let score = parseInt(document.querySelector("#comScore").innerHTML);
                score++;
                document.querySelector("#comScore").innerHTML = score;
                document.querySelector("#gameComputerScore").innerHTML = score; // Update computer score in "GAME STATS"
                updateLeaderboard(`${username} Loses with Paper against Computer's ${getChoiceName(compChoice)}`);

            }

            // To Update the displayed choices
            document.getElementById("user").src = "scissor.png";
            if (compChoice === 0) {
                document.getElementById("comp").src = "rock.png";
            } else if (compChoice === 1) {
                document.getElementById("comp").src = "paper.png";
            } else {
                document.getElementById("comp").src = "scissor.png";
            }
            updateCrown();
        }

        function getChoiceName(choice) {
            if (choice === 0) {
                return "Rock";
            } else if (choice === 1) {
                return "Paper";
            } else {
                return "Scissors";
            }
        }

        // Function to toggle the Game Stats section visibility
        function toggleGameStats() {
            const GSS = document.getElementById("GSS");
            if (GSS.style.display === "none" || GSS.style.display === "") {
                GSS.style.display = "inline-block";
            } else {
                GSS.style.display = "none";
            }
        }

        function toggleLeaderboard() {
            const LBS = document.getElementById("LBS");
            if (LBS.style.display === "none" || LBS.style.display === "") {
                LBS.style.display = "block";
            } else {
                LBS.style.display = "none";
            }
        }
