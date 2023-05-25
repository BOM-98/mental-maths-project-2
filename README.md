
> # Mental Maths Trainer

## Table of Contents
- [Introduction](https://github.com/BOM-98/mental-maths-project-2#introduction)
- [Design Choices](https://github.com/BOM-98/mental-maths-project-2#design-choices)
- [Features](https://github.com/BOM-98/mental-maths-project-2#features)
- [Features Left to Implement](https://github.com/BOM-98/mental-maths-project-2#features-left-to-implement)
- [Technologies Used](https://github.com/BOM-98/mental-maths-project-2#technologies-used)
- [Javascript Logic](https://github.com/BOM-98/mental-maths-project-2#javascript-logic)
- [Testing](https://github.com/BOM-98/mental-maths-project-2#testing)
- [Deployment](https://github.com/BOM-98/mental-maths-project-2#deployment)
- [Bugs/Issues](https://github.com/BOM-98/mental-maths-project-2#bugs--issues)
- [Credits](https://github.com/BOM-98/mental-maths-project-2#credits)
- [Acknowledgements](https://github.com/BOM-98/mental-maths-project-2#acknowledgements)

## Introduction

Welcome to Mental Maths Trainer, a fun and flexible online tool that may be used to assist individuals improve their mental arithmetic abilities. Young pupils and adults looking to advance their mental agility and mathematical skill are both welcome on the platform.

In order to keep users interested and challenged, Mental Maths Trainer provides a dynamic environment for learning addition, subtraction, multiplication, and division with problems that automatically increase in complexity. Our application maximizes learning potential by following the [85% rule for optimum learning](https://www.nature.com/articles/s41467-019-12552-4), to ensures that users experience the right balance of success and challenge, maximizing their learning potential. Users will progress through the app until they reach a level where they are not getting the right answer approx 15% of the time. 

It has been demonstrated that practicing mental arithmetic improves cognitive functioning and neuroplasticity. Users who regularly practice mental arithmetic can get a variety of advantages in addition to better math abilities. Improved working memory, attention, and processing speed have all been shown as a result of practicing mental arithmetic, according to [research](https://psycnet.apa.org/record/2012-26807-001).

The brain' ability to grow new neurons to adapt to a stimulus, known as neuroplasticity, is a key driver in developing mental arithmetic skills. Studies show that performing cognitive activities like mental addition and subtraction can boost neuroplasticity, [leading to stronger connections between neurons and improved brain function](https://www.nature.com/articles/427311a).

The Mental Maths Trainer is an online application that will offer several advantages, including higher performance in daily activities, increased neuroplasticity, and improved cognitive capacities. Users may get these benefits and see a good influence on their general cognitive development and daily lives by regularly practicing mental arithmetic with Mental Maths Trainer. Users will be working in an optimal environment that maximizes the development of their working memory, problem-solving skills, and task-focus.

The game has no end, the goal is to reach level 18 of the game, but if someone reaches level 18 they can continue for as long as they wish. This is to avoid putting restrictions on how long someone would like to train for. 


![Header Image](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/am-i-responsive-displays.png)

## Design Choices

### Target Personas

#### General Target Audience

- Age: 18-60
- Profession: Disciplines that require focused concentration for long periods of time, and typically can tax working memory and problem solving skills. People still in education would not be considered part of the target audience as they are still engaged in continuous learning and do not have as much of a need to 'work out' their brains in the general sense. 
- Motivation: Either to improve the general congitive capacities of the human brain for application in work and everyday life or to specifically improve arithmatic abilities due to embarrasment or fear over an inability to perform mental calculations. 

#### Target Persona: Jessica, the Busy Professional

1. Problem:
Jessica struggles with mental arithmetic, which affects her confidence and ability to make quick calculations in her daily life. She often relies on calculators or smartphone apps to solve even simple math problems, which can be time-consuming and inefficient.

2. Motivation:
Jessica wants to improve her mental arithmetic skills to increase her confidence, enhance her cognitive abilities, and be more efficient in her professional and personal life. She seeks an engaging, adaptive, and accessible platform that fits her busy schedule and provides a challenging yet achievable learning experience.

3. Demographics:
- Age: 32 years old
- Gender: Female
- Occupation: Marketing Manager
- Education: Bachelor's degree in Business Administration
- Location: Urban area, Ireland

4. Jobs to be done:
- Find a convenient and engaging platform to practice mental arithmetic regularly.
- Improve mental arithmetic skills to tackle problems in daily life with confidence and ease.
- Enhance cognitive abilities, such as working memory, attention, and processing speed, to improve overall decision-making and problem-solving.
- Track progress and achievements to stay motivated and celebrate milestones.
- Access a learning platform that adapts to her skill level, providing an optimal balance of challenge and success.
- Incorporate mental arithmetic training into her daily routine seamlessly, without disrupting her busy schedule.

#### Target Persona: Michael, the Finance Enthusiast

1. Problem:
Michael is interested in training his brain and improving his overall cognitive abilities to excel in his finance career and personal life. While he is proficient in arithmetic, he seeks to enhance his mental agility and problem-solving skills through regular mental exercises.

2. Motivation:
Michael wants to engage in challenging mental activities that will not only sharpen his arithmetic skills but also contribute to his overall cognitive development. He is looking for a platform that offers diverse mental challenges and adapts to his current skill level, providing an optimal learning experience.

3. Demographics:
- Age: 40 years old
- Gender: Male
- Occupation: Financial Analyst
- Education: Master's degree in Finance
- Location: Urban area, United Kingdom

4. Jobs to be done:
- Discover a platform that offers engaging mental exercises to improve overall cognitive abilities, including memory, attention, and processing speed.
- Enhance mental arithmetic skills to maintain and further develop his proficiency in financial calculations.
- Participate in a learning experience that adapts to his skill level, providing an optimal balance of challenge and success.
- Track progress and achievements to stay motivated and measure improvements in cognitive abilities.
- Integrate regular mental training into his daily routine without disrupting his work-life balance.
- Utilize improved cognitive skills to excel in his finance career and tackle everyday challenges with greater ease and confidence.

All design decisions incorporated into the web app were made keeping these target personas and their problems, motivations and jobs to be done in mind. 

### Colour Scheme

1. Background Color: Anti-flash white (#F3F4F5)
   - This off-white color maintains a clean, neutral backdrop for content while reducing eye strain caused by the high contrast of pure white. It also maintains sufficient contrast with the text color (Dark Gray) to ensure readability and accessibility.

2. Secondary Color / Text Color: Eerie black (#1E1E1E)
   - A softer alternative to black that maintains high contrast with the white background for easy readability.

3. Primary Color: Argentinian Blue (#67AEF4)
   - A lighter, more approachable shade of blue that complements the primary color. It can be used for buttons, links, and other interactive elements to create a sense of engagement and accessibility. Represents trust, professionalism, and intelligence. Perfect for conveying the educational and cognitive improvement aspects of the website.
   
4. Highlight Color: Lime Green (#09CE28)
   - A sharp green colour to draw attention to the most important statistics the user will need to keep in mind. This colour can be adjusted in opacity to create a softer feel on the eyes, while maintining its contrast with other elements. This colour will be used sparingly to maintain its importance. 

5. Warning Color: Red (#FF0000)
   - A sharp color to draw attention to timers that are about to run out or scores that have fallen low. This red will only be displayed dynamically as indicators on the screen show the user is running out of time or performing poorly.

#### Accessibility and contrast considerations:

When designing the website, it's crucial to ensure that the color contrast ratios meet the Web Content Accessibility Guidelines (WCAG) standards. This will guarantee that users with visual impairments can easily access and navigate the site.

In this color palette, the primary color (Argintinian Blue) and secondary color (Eerie black) provide sufficient contrast against the white background. However, the highlight color (Lime Green) is used sparingly and with caution, as it may not provide enough contrast against the white background for some users.

Overall, this color palette provides a professional, engaging, and accessible experience for users, ensuring that the site's design aligns with its purpose and target personas.

![Colour Palette](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/p2-color-palette.png)

### Typography

1. Primary Heading (H1):
- Font Family: Montserrat
- Justification: Montserrat is a contemporary, geometric sans-serif typeface that is inviting and professional. It is appropriate for both target personas because to its clear lines and softened edges, which give a feeling of clarity and approachability.

2. Secondary Heading (H2):
- Font Family: Open Sans
- Justification: Open Sans is a humanist sans-serif font family that is adaptable and has high readability. It pairs nicely with Montserrat and performs well for subheadings, making it simple for readers to distinguish between content levels while upholding a uniform visual look.

3. Tertiary Heading (H3) and Body Text:
- Font Family: Roboto
- Justification: Roboto is a highly readable, neo-grotesque sans-serif typeface that was created especially for digital interfaces. Its readability and welcoming appeal make it a great option for body text and tertiary headers, ensuring that both target personas can quickly access the material.

4. Accent Text (quotes, callouts, etc.):
- Font Family: Lato
- Justification: Lato is a warm, humanist sans-serif typeface that gives accent text a dash of class and finesse. It blends in nicely with the other font families and aids in underlining crucial information without interfering with the website's overall aesthetic harmony.

### Wire Frames
I created my wireframe using Figma.

#### Desktop Page

The home page was designed to show only pertinent information on the screen. Statistical indicators including time, level and quesiton number are displayed across the top. On the very right of the statistics container a box displays the current percentage of questions the user is getting correct and on time. the user will need to keep this score above 85% to progress to further levels. 

The center of the page features the sum to be answered and the input box that the user can use to answer the question. 

![Wireframe1](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/desktop-wireframe.png)

#### Phone Page

The mobile version condenses the statistics together and displays them as a column to improve the aesthetics of the layout.  

![Wireframe2](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/phone-wireframe.png)

### Sitemap

A sitemap was generated using [xml-sitemaps.com](https://www.xml-sitemaps.com/). This was added to the root directory. 

To rank the website on Google Search, a Google HTML file was added to the root directory (/workspaces/Mental-Maths-Project-2/googleb4228df491edf6c8.html). I did not rename this file to something shorter and more readable as I was concerned about Google's ability to identify the file and verify the site if I did. 

The sitemap was uploaded to Google Search Console to improve page ranking on Google search.

![Sitemap Upload](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/google-sitemap-xml-verification.png).

A sitemap HTML tag was also added to the root repository to enable Google to validate the site ownership. 

![Sitemap HTML Upload](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/google-sitemap-html-verification.png)

## Features

The Mental Arithmetic website has numerous features, including an instruction modal, automatically generated sums, a question counter, a level incrementor, timer, score keeper, responsive buttons modal, submit and reset buttons.   

### ![Homepage Display](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/homepage.png)

- ### Instruction Modal 
    
    -   The instruction modal pops up on page load to explain to the user the purpose of the website and how to play.
    -   It informs the user that there are 18 levels, and the game does not have a defined end. 
    -   The start button is highlighted to begin the game, however the user can click anywhere on the page to start.
    -   The modal the disappears as the game starts. 


![Instruction Modal](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/instruction-modal.png)

- ### Automatically Generated Sums
    
    -   The game automatically generates sums for the user to answer and displays them in a blue box.
    -   These sums are answered inside the blue input box below. 
    -   The sums generated gradually increase in difficulty as the user progresses into higher levels.

![Automatically Generated Sums](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/auto-generated-sums.png)

- ### Statistics Container
    
    -   Metrics relevant to the user are displayed in a container above the auto-generated sums. 
    -   These metrics include the level the user is on, the number of questions answered, the time the user has left to answer the question and the percent of questions the user has passed. 

![Statistics Container](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/statistics-container.png)

- #### Question Counter

-   The quesiton counter is displayed within the statistics container and increments every time the user answers a question. 

![Question Counter](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/question-counter.png)

- #### User Level Indicator

-   The user level indicator tells the user what level they are on.
-   Every time the user answers a question, it is recorded as an object using a factory function (answerObject as seen below) with key value pairs that contain their answer, the correct answer, the question number, if their answer was correct, the time on the timer when the question was answered and if they passed the question (whether the answer is correct and answered in under 60 seconds and the level of the question). 
-   This answer object is then added to an array which contains an object instance for every question the user has answered.
-   This array is iterated through by the adjustLevel function and if the user has answered 4 questions on that level and their score is above 85% it will increment their level and progress them onto harder sums.  

![level-indicator](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/level-indicator.png)

```
export const answerObject = (
  answer,
  correctAnswer,
  questionNumber,
  isCorrect,
  time,
  level
) => {
  let passed;
  // if the answer is correct and the time is greater than 0, the question is passed
  if (isCorrect === true && time > 0) {
    passed = true;
  } else {
    passed = false;
  }

  return {
    answer: answer,
    correctAnswer: correctAnswer,
    questionNumber: questionNumber,
    isCorrect: isCorrect,
    time: time,
    passes: passed,
    level: level,
  };
};
```

- #### Timer

-   The timer is controled using an the timer object as seen below.
-   The timer tells the user how long them have left to answer the question.
-   The timer is  decremented every second. The colour of the timer box dynamically changes color depending on how much time the user has left. If the user has less than 10 seconds left, the box turns to a warning red to alert them. 
-   If the timer reaches zero, a method is called which automatically inputs 0 as an answer in the question input which is guaranteed to be wrong and calls the checkAnswer() function which submits the answer and moves on to the next question. 

![timer](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/timer.png)

```
export let timer = {
  //timer set to 60 seconds at the beginning
  time: 60,
  //every second the tiner will decrease by 1
  secondInterval: 1000,
  start: function intervalSetter() {
    setInterval(function () {
      timer.time--;
      //display the time in the time element
      document.getElementById("time").innerHTML = timer.time;
      //change the background color of the time element depending on the time left
      if (timer.time > 40) {
        document.getElementsByClassName("time")[0].style.backgroundColor =
          "var(--global-color-secondary-green )";
      } else if (timer.time > 10 && timer.time <= 40) {
        document.getElementsByClassName("time")[0].style.backgroundColor =
          "var(--global-color-warning-amber)";
      } else {
        document.getElementsByClassName("time")[0].style.backgroundColor =
          "var(--global-color-warning-red)";
      }
      //if the time is up, submit 0 as an answer and check the answer
      // 0 is guaranteed to be an incorrect answer so the user will not pass the question
      if (timer.time === 0) {
        const display = document.getElementById("answer");
        display.value = 0;
        alert("Time is up!");
        checkAnswer();
      }
    }, 1000);
  },
  //reset the timer to 60 seconds
  reset: function () {
    timer.time = 60;
  },
};
```

- #### Score Keeper

-   The score keeper tells the user what percentage of questions they have 'passed'. 
-   To pass the user much have submitted the correct answer and in under 60 seconds.
-   The user must maintain a score higher than 85% to progress to the next level. 
-   The score keeper box dynamically changes color depending on the score the user has. It will either be red, amber or green depending on how well the user is performing.
-   This is controlled by the updatePercentage function shown below. This function takes in an array of the object instances for each answer submitted by the user and iterates through the array to calculate the user's score and update the score keeper's color. :  

![Score Keeper](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/score-keeper.png)

```
export function updatePercentage(answerArray) {
  let percentPasses = Math.round(
    (answerArray.filter((answer) => answer.passes === true).length /
      answerArray.length) *
      100
  );
  if (isNaN(percentPasses)) {
    percentPasses = 0;
  } else {
    document.getElementById("percentage").innerText = percentPasses + "%";
  }

  if (percentPasses > 85) {
    document.getElementsByClassName(
      "green-container"
    )[0].style.backgroundColor = "var(--global-color-secondary-green )";
  } else if (percentPasses > 60) {
    document.getElementsByClassName(
      "green-container"
    )[0].style.backgroundColor = "var(--global-color-warning-amber)";
  } else {
    document.getElementsByClassName(
      "green-container"
    )[0].style.backgroundColor = "var(--global-color-warning-red)";
  }
}
```

- ### Responsive Input Buttons

-   If the screen is smaller than 400px, as on most phones, a keyboard pops up on screen when the user attempts to insert an input. This creates some issues from a usability perspective as it can hide certain elements behind the keyboard creating a negative user experience.  
-   To account for this, I have inserted my own keyboard for the user that pops up when the screen is smaller than 400px.
-   This avoids problems created by the default keyboards that pop up on android and iOS phones by avoiding the need for the user to depend on it. 

![responsive-input-buttons](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/responsive-input-buttons.png)

- ### Submit and Reset Buttons

-   The user can submit questions using the submit button if they would prefer. 
-   The user can also restart the whole game by pressing/clicking the reset button which refreshes the whole page and starts the game again. 

![submit and reset buttons](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/submit-and-reset.png)

## Features Left To Implement

- ### Progress Bar
- I would have liked to have included a progress bar for people to be able to see how close there were to the final level, or alternatively how close they were to reaching the next level if they got all the questions right. This would have added a little more gamification to the site. 

- ### Profiles & Database
- While outside the scope for this project, I would have liked to have given people the option to create profiles, and store their results in a database so that I could keep them on the same level as their previous session. This would avoid the need for people to work their way back up multiple levels to get to their optimal level of difficulty. This would better serve the purpose of the website, enabling users to maximize their skill progression with each session. 

- ### Points, Rankings and Leaderboards
- One way to gamify the website further would be to introduce points that are earned based on the difficulty of the question and how long it took the user to answer the question. These points would accumulate from the beginning of each session. We could set the game to have a set time limit e.g. 10 minutes, and then rank players based on location e.g. you are 100th out of 300 people in Dublin (66th Percentile). 

- ### Analytics Dashboard
- If profiles and points are implemented, a dashboard page could be created that would enable users to see their progression over time as they use the app and quantify how they are improving. This could graph the points earned per question and the average difficulty of each question for the user as a line chart over time. 

## Technologies Used: 

I used the following technologies, platforms and support in building my project: 

- I used [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension within Visual Studio Code to visualize and test my website as I was creating it.
- [Visual Studio Code](https://code.visualstudio.com/) was the IDE used to create the website.
- Visual studio code 'Chrome Debugger' was used for testing different aspects of the code and debugging line-by-line. 
- [Github](https://github.com/) was used for the project repository.
- Git was used for version control.
- Designs were created using [Figma](https://figma.com/).

## Javascript Logic

Javascript was separated into three different files, index.js, math-functions.js and data-structures.js to follow best practices and separation of concerns.

The order and logic of the functions in the website are outlined in the diagram below. 

![Javascript Logic](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/javascript-logic.png)

## Testing

To ensure the site functions appropriately I conducted several tests. This includes HTML, CSS, and Javascript testing. 

### Validator Testing

-   HTML
    -   No errors were returned when passing through the official  [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbom-98.github.io%2Fmental-maths-project-2%2F).
    ![W3Cvalidator](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/html-validator.png)
-   CSS
    -   No errors were found when passing through the official  [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fbom-98.github.io%2Fmental-maths-project-2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).
    ![Jigsaw Validator](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/css-validator.png)
   - Page Performance
	   - Above 90% score across Performance, Accessibility, Best Practices & SEO on [PageSpeed Insights] for Desktop(https://pagespeed.web.dev/analysis/https-bom-98-github-io-mental-maths-project-2/g1r9b9ffwx?form_factor=desktop).
       Desktop
       ![PageSpeed Desktop](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/desktop-pagespeedIndex.png)
       Mobile
       ![PageSpeed Mobile](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/mobile-pageSpeed-index.png)
-   JavaScript
      - No errors were found when passing through jshint.com(https://jshint.com/)
       
### Manual Testing

- For each new page implementation
    - every page button was checked to make sure they performed the correct action.
    - every element was checked to make sure they were sized correctly and resized as expected with different screen dimensions.
    - The input was checked for defensive coding (error message for wrong input) and correctly initiated the next question.
    - Google dev tools were checked to make sure there was no errors logged to the console for any Javascript functions that were invoked.
    - compatibility tests were done for different browsers.
- I received additional manual testing help from my mentor and several other people to check as many edge cases as possible.

### Automated Testing

  - Unit testing was implemented using Mocha. These tests ensured that the generateNum1 function worked correctly as it has to reference both the digitParameters and gameLevelSettings data structures and generate the correct digits depending on the level of the game. Over 200 tests were implemented to ensure that the function worked across 9 different values at different levels of the game. 

  ![Unit Tests 1](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/unit-tests.png)
  ![Unit Tests 2](https://github.com/BOM-98/mental-maths-project-2/blob/main/assets/images/unit-tests-2.png)

## Deployment

-   The site was deployed to GitHub pages. The steps to deploy are as follows:
    -   Before deployment, I edited my working directory using Visual Studio Code Remote Explorer. 
    - I added my files to the staging area using the 'git add .' command in the terminal.
    - Once files were added to the staging area, I committed my files using 'git commit -m 'my message'.
    - Once my changes had been committed, I pushed the changes to the remote repository using 'git push' in the terminal. 
    - In the GitHub repository, navigate to the Settings tab.
    -   From the source section drop-down menu, select the main Branch.
    -   Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful .deployment.

The live link can be found [here](https://bom-98.github.io/mental-maths-project-2/). 

## Bugs / Issues

There were a number of notable issues that arose while creating this website. Two of the most prominent issues that have arisen are detailed below.  

-  While attempting to increment questions in the game, I noticed that every time I submitted an answer my website would increment the question for a split second and then reset to zero. I attempted to debug this using stackOverflow and chrome debugger within VS code but my program would perform the way I intended within the debugger and questions incremented with each answer submission. After a number of hours I realized that my input element was enclosed within a form element, and was therefore refreshing the page every time I submitted an answer, causing the question count to reset. Once I removed the form element my program performed as expected and the question count incremented with each submitted answer.
- While working through my program with my mentor I realized that my levels were incrementing within the DOM but the questions were not getting any more difficult.  I used chrome debugger to investigate what the issue was and realised that my level parameter being passed to the adjustLevel function was stuck on 0, even though the levels were incrementing on the DOM. I later found that I had initialized a level variable globally that read the level from the dom element, but was not incrementing as the user moved up levels, and it was this variable that was being passed into the function. Once I corrected this bug the program performed as expected and the questions started increasing in difficulty again. 

## Credits

### Resources

- Codecademy provide a free online course [Introduction to UI and UX Design](https://www.codecademy.com/courses/intro-to-ui-ux/informationals/ui-and-ux-welcome) which taught me the basics of how to design prototypes on Figma. This came in very handy during this project as I wireframed by web app and thought through the color scheme and typography choices I had to make.
- Designing the website followed the [10 usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) from the Nielsen Norman Group to ensure my web app was easy to navigate, understand and learn from.
- Unit testing was implemented by following Codecademy's course on [Javascript Testing](https://www.codecademy.com/career-journey/full-stack-engineer/path/fscj-22-front-end-development/track/fscj-22-javascript-testing).
- Implementing modules using ES6 Syntax was done by following Codecademy's course on [Javascript Modules](https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-front-end-development/tracks/fscj-22-javascript-syntax-part-iii/modules/wdcp-22-learn-javascript-syntax-modules-7ac62a4b-087e-4517-9b13-cc0e94b8495d/articles/implementing-modules-using-es-6-syntax).
- Code for the calculator on the mobile version of the app was found in [Coding Nepal's Website](https://www.codingnepalweb.com/calculator-html-css-javascript/).
- The favicon was generated and uploaded following instructions from [favicon.io](https://favicon.io/favicon-converter/)


### Layouts

- How to create a timer object that decrements the time was learned from [stackoverflow](https://stackoverflow.com/questions/8126466/how-do-i-reset-the-setinterval-timer).
- Explaining how to implement a modal and the source code was found in [w3Schools](https://www.w3schools.com/howto/howto_css_modals.asp). 

### Images

- The responsive website mockups were generated using [Am I Responsive](https://ui.dev/amiresponsive).
- Colour scheme was displayed (not generated) using [Coolors](https://coolors.co/).
- The favicon was sourced from [Flaticon](https://www.flaticon.com/free-icon/calculator_897368?term=maths&page=1&position=3&origin=search&related_id=897368)


### Favicon

- Favicon created using [favicon.io](https://favicon.io/favicon-converter/).

### Wireframes

- Wireframes were created using [Figma](https://figma.com/). 

## Acknowledgements
 
 I would like to thank my Mentor [CluelessBiker](https://github.com/CluelessBiker) for all of her help in getting this project live. She has contributed so much through her advice in making sure this website was free of bugs and met the requirements of the course. 