# GitPeek

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Future Upgrades](#future-upgrades)

## Introduction

GitPeek is a lightweight application designed to leverage the GitHub Graph API to retrieve and display detailed information about GitHub users.
This tool aims to provide developers, researchers, and enthusiasts with easy access to user data, including repositories, contributions, and activity statistics, directly from GitHub's extensive database.

## Features

- Fetch user profiles by GitHub username.
- Display user-specific data such as repositories, and awarded stars.
- Easy to navigate user interface for seamless data retrieval.


## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your system (version 12.x or higher recommended).
- A GitHub account and a personal access token for the GitHub Graph API. See [Generating a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) for more information.

## Installation

1. Clone the repository to your local machine:

git clone
 https://github.com/themisterpin/gitpeek.g


2. Navigate to the project directory:cd gitPeek
3. Install the necessary dependencies:npm install




## Usage

To start using the GitHub User Data Fetcher, follow these steps:

1. Set up your GitHub personal access token in the application (refer to the `.env.example` file for guidance on setting environment variables).
2. Run the application:npm run dev
3. Navigate to `http://localhost:5173` (or the configured port) on your web browser.
4. Enter a GitHub username to fetch and display the user data.

## API Reference

For details on the GitHub Graph API used by this application, visit the [GitHub Graph API documentation](https://docs.github.com/en/graphql).

## Contributing

Contributions to the GitPeek are welcome. If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Future Upgrades


GitPeek is continuously evolving, and we're excited about the roadmap ahead. Here's what we're planning to implement next:

- **User Authentication**: Implement OAuth2 GitHub authentication to allow users to log in with their GitHub accounts, providing a personalized and secure experience.

- **Repository Starring Feature**: Enable users to star repositories directly from the app, making it easier to bookmark favorite projects.

- **User and Repository README Fetching**: Add functionality to retrieve and display the README files for both user profiles and their repositories, offering a quick overview of project documentation.

- **Advanced Repository Search**: Implement an advanced search feature to filter repositories by language, stars, forks, and more, helping users discover projects that match their interests.

- **Project Dashboards**: Introduce dashboards for users to monitor activity across their repositories, including commit history, open issues, and pull requests, in a consolidated view.

- **Organize Repositories into Lists**: Allow users to categorize repositories into custom lists, such as "Learning Resources," "Work Projects," or "Open Source Contributions," for better organization.

- **Interactive Repository Graphs**: Visualize repository statistics through interactive graphs, showing trends in contributions, language usage, and activity over time.

- **Dark Mode**: Implement a dark mode theme to reduce eye strain and accommodate user preferences for low-light environments.

- **Mobile Responsiveness**: Ensure the app is fully responsive and accessible on various devices, including smartphones and tablets, for on-the-go access.

- **Collaboration Tools**: Introduce features that facilitate collaboration on projects, such as sharing lists of repositories with other users and commenting on repositories.


- **Themes**: Too catoony for you? 
soon you'll be able to change the theme of GitPeek! 


We're open to ideas and contributions from the community! If you have suggestions or want to contribute to any of the upcoming features, please follow our contributing guidelines and join us in making GitPeek even better!