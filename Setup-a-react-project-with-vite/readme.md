## React.js: Setting up a React project with Vite

# Overview Monday AM

React.js is designed to solve a number of problems that arise when building complex web applications. It was built and released under an open source license by Facebook in 2013, to solve real problems they were facing in their own codebase while building out the world's largest social network (at time of writing!).

React introduces some new approaches and concepts, and builds upon the existing underlying web technologies to create reusable pieces of an application that can be composed together into a greater whole. These are called components. Components are the building blocks of an application, encapsulating together the HTML, CSS and JavaScript that make up a single piece of functionality.

The React documentation at react.dev is superb, so it's recommended you read through it in your own time. We'll often defer our explanations to those docs with links where possible.

Reading: React: Getting Started : https://react.dev/learn
Reading: Vite: Why Vite? : https://vitejs.dev/guide/why.html
Workshop: Setting up a new React project using Vite
Topics
What is React?
What problems does React solve?
What is a component?
What is JSX?
What is the Virtual DOM?
Required Knowledge
HTML
CSS
JavaScript
Node.js
npm
Resources
React
React: Creating and nesting components
React: JSX
React: Displaying data
React: Conditional Rendering
Workshop
Why does React Exist?
React was created to address problems that arise when building complex web applications that are interactive and constantly changing. It was created by a small team at Facebook to solve problems they had building the social network. There's a good documentary, The Story of React, that is worth a watch.

There's a story about the Facebook notification badge that illustrates the problem React was created to solve:

Facebook had a problem with the red notification badge for new messages. It was there to show when you had unread messages in your inbox.

The badge was in the header of the page, the inbox was in the sidebar, and messages could be shown in popups in the bottom right as you browsed the site. With multiple new messages arriving and multiple messages being marked as read from different locations and saving over slow internet connections, plus the header being reloaded when you navigate pages, it was easy for events that updated the notification count to end up happening in a confusing order.

The badge would get out of sync with the actual number of unread messages, and give false information to the user. Fixing one bug would often create another.

Users would frequently see the unread notification badge, click on it, and find no unread messages. This was a bad user experience, and Facebook wanted to fix it.

How React Solves the Problem
React flips the problem upside down. It doesn't get the current unread count from the HTML, increment or decrement it, then put it back, from three different places at once and hope it all works out. Instead it makes the number of unread notifications in the database the single source of truth, and treats the HTML as a function of that data. When that data changes, the HTML changes too, automatically. Or you might say REACTively.

All the different parts of the page that need to know about or change the number of unread message notifications are reading from and updating the same source of truth: the data about how many messages there currently are unread. When we get a new response from the API about that value, the UI changes too, everywhere all at once.
