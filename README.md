# Team Profile Generator

## Description

Team Profile Generator is a command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

Here is a walkthrough [video](https://drive.google.com/file/d/1RImveh8rJilOYceOO-_87P3yUZwI6Kj_/view) demonstrating the functionality of the application.

### Features

- Easy to modify
- Provides choices to add more team members
- Generates a responsive webpage

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)

## Installation

- Create a new repository on your GitHub account.
- Clone this repository.
- Run `npm i`
- Run `npm run test`
- Run `node index.js`

## Usage

This project can be used in any command-line.

Following is a code snippet of the application page.

Here it refers to the async function. It prompts questions for manager role and awaits for the response. It creates a Manager object with the given input.

```Node.js

async function init() {
  const managerAnswers = await inquirer.prompt(managerQuestions);

  const managerObj = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officenumber
  );
  employeeArr.push(managerObj);
}

```

## Technologies Used

- Node.js
- Inquirer package
- Jest
- Bootstrap
- Git
- GitHub

## Credits

- npmjs.com
- MDN / W3Schools

## License

This project is licensed under the [MIT](./LICENSE) license.
