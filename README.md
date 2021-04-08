# Betna

An eager little app for a warm family

## What's it about?

##### This is a personal side project I'm building for my small family (currently my wife and I). It's an attempt to use all the skills I've garnered so far as a software engineer to build a general purpose assistant app for various home problems. There are tons of apps out there that are way better than Betna. You may find quirky designs, bad pracitices, and weird code. But this is all about the fun of building it. :)

---

## Feature Roadmap

##### This a list of expected features from this app. Each main item roughly marks a major release. The list is not essentially sequential so a feature may be released without needing all it's sub-features. They can be revisited later however.

- Family + Personal Budgeting
  - Multiple Accounts per person
  - Account budgeting
  - Categories for income and expenses
  - Transaction History
  - Currency exchange
  - History Visualization
  - Notifications
- Shopping Lists
  - Grocery list
    - Current grocery list [think of it like a backlog]
    - Recurring items (Tap to add needed items)
    - Send a temporary list to family member (assign it to them)
      - Option to clear current grocery list items on assigning [think of it as committing to an item this sprint]
  - Custom shopping lists
    - Custom names
    - Ability to link to an account with budget
    - Smart suggestions on what you can buy
  - Categories for list items
- To Do lists
  - House To Do's
  - Group To Do's
- Smart Home

---

## Getting Started with local development

### Prerequisites

- NodeJS
- Yarn
- MongoDB

### Installation

- Clone the repo
- run `yarn install:all`
- (optional) To install node modules for client only, run `yarn install:client`

By default `yarn install` will install server packages only

### Running the project

```sh
yarn dev # To run the client and server
yarn dev:client # To run the client only
yarn dev:server # To run the server only
```
