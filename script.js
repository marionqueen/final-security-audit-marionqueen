window.onload = function () {
    const optionsContainer = document.getElementById('optionsContainer');

    // The adventure tree represented as a nested structure
    const adventureTree = {
        text: "Choose Your Own Travel Adventure",
        options: [
            {
                text: "Travel to Asia",
                options: [
                    {
                        text: "Japan",
                        options: [
                            {
                                text: "Mario Go-Karting",
                                options: [
                                    { text: "Evening Go-Karting", result: "YOU HAD AN AWESOME TIME!", image: "images/gokart_morning.jpg" },
                                    { text: "Morning Go-Karting", result: "OH NO, IT'S RAINING!", image: "images/gokart_raining.jpg" }
                                ]
                            },
                            {
                                text: "Onsen Hot Springs",
                                options: [
                                    { text: "Kyoto Hot Springs", result: "OH NO, MONKEYS ARE BATHING! NO ROOM!", image: "images/ONSEN_monkeys.jpg" },
                                    { text: "Beppu Hot Springs", result: "WONDERFULLY REFRESHED!", image: "images/ONSEN_AWESOME.jpg" }
                                ]
                            }
                        ]
                    },
                    {
                        text: "South Korea",
                        options: [
                            {
                                text: "Dig into a proper Korean BBQ",
                                options: [
                                    { text: "Samgyupsal ONLY", result: "CRAVINGS SATISFIED!", image: "images/koreaBBQ_good.jpg" },
                                    { text: "Samgyupsal with SOJU", result: "OH NO! YOU GOT DRUNK WITH SNOOP DOGG!", image: "images/koreaBBQ_bad.jpg" }
                                ]
                            },
                            {
                                text: "Visit the Demilitarized Zone",
                                options: [
                                    { text: "You stayed with Group", result: "IT WAS A GREAT EXPERIENCE!", image: "images/dmz_GOOD.jpg" },
                                    { text: "You got Lost", result: "OH NO! YOU JUST MET KIM JONG-UN!", image: "images/dmz_BAD.jpg" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                text: "Travel to Europe",
                options: [
                    {
                        text: "France",
                        options: [
                            {
                                text: "Tour the Eiffel Tower",
                                options: [
                                    { text: "Go in June", result: "OH NO! TOO MANY PEOPLE!", image: "images/EIFFELTOWER_BAD.jpg" },
                                    { text: "Go in May", result: "GREAT VIEW AT THE TOP OF THE TOWER!", image: "images/EIFFELTOWER_GOOD.jpg" }
                                ]
                            },
                            {
                                text: "Visit the Louvre",
                                options: [
                                    { text: "Public tour", result: "OH NO! TOO MANY PEOPLE!", image: "images/LOUVRE_BAD.jpg" },
                                    { text: "Private tour", result: "INTIMATE EXPERIENCE!", image: "images/LOUVRE_GOOD.jpg" }
                                ]
                            }
                        ]
                    },
                    {
                        text: "Italy",
                        options: [
                            {
                                text: "Gondola Ride in Venice",
                                options: [
                                    { text: "Gondola Ride in the Day", result: "Only 90 EUR, great savings!", image: "images/GONDOLA_DAY.jpg" },
                                    { text: "Gondola Ride at Night", result: "Oh no! 110 EUR, expensive!", image: "images/GONDOLA_NIGHT.jpg" }
                                ]
                            },
                            {
                                text: "Tour the Vatican in Rome",
                                options: [
                                    { text: "You got lost in the crowd", result: "YOU MET THE POPE!", image: "images/VATICAN_GOOD.jpg" },
                                    { text: "You stayed with the tour", result: "IT WAS NOT ENOUGH!", image: "images/VATICAN_OKAY.jpg" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    // Function to render the current step
    function renderStep(step) {
        optionsContainer.innerHTML = ""; // Clear previous options

        // Display the current step text
        const stepText = document.createElement('h2');
        stepText.innerText = step.text;
        optionsContainer.appendChild(stepText);

        // Check if this step has options or is an end result
        if (step.options) {
            step.options.forEach(option => {
                const button = document.createElement('button');
                button.innerText = option.text;
                button.className = 'option-button'; // Add class for consistent styling
                button.onclick = () => renderStep(option);
                optionsContainer.appendChild(button);
            });
        } else if (step.result) {
            // Display the end result
            const resultText = document.createElement('h3');
            resultText.innerText = step.result;
            resultText.className = 'result-text'; // Add class for styling
            optionsContainer.appendChild(resultText);

            // Display the image
            const resultImage = document.createElement('img');
            resultImage.src = step.image;
            resultImage.className = 'result-image'; // Add class for styling
            resultImage.alt = step.result; // Add accessible alt text
            optionsContainer.appendChild(resultImage);

            // Add a "Restart" button
            const restartButton = document.createElement('button');
            restartButton.innerText = "Restart Adventure";
            restartButton.className = 'restart-button'; // Add class for consistent styling
            restartButton.onclick = () => renderStep(adventureTree);
            optionsContainer.appendChild(restartButton);
        }
    }

    // Render the initial step
    renderStep(adventureTree);
};
 