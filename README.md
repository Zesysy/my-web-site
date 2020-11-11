# Ma petite création

Designed to show my work while discovering NextJs:
   - configuration of the application in order to use NextJs
   - addition of a contact form using a Netlify functionality
   - creation of Javascript objects to manage the site data and play with the map() method
   - setting up Netlify to use a domain name and allow redirection

## Prerequisites

- npm 6.14.8

## Clone

Clone this repo to your local machine using

```bash
git clone git@github.com:Zesysy/my-web-site.git
```

## Getting Started

1.  `npm install`

2.  `npm run dev`

![Application view](/public/static/applicationView.png)

## Built With

-  [ReactJs](https://reactjs.org/) - The web framework (library) used

-  [NextJs](https://nextjs.org/) - The React framework

-  [Reactstrap](https://reactstrap.github.io/) - Boostrap for React

-  [Bootswatch](https://bootswatch.com/) - Free themes for Bootstrap

-  [TypeWriter](https://www.npmjs.com/package/react-typewriter-hook) - For typing effect easily

## Architecture

```bash
node_modules # folder where all the dependencies are installed. Don't touch this
public
├──static # contains the images in an image sub-folder (important to respect this structure under NextJs)
components 
├──contact # Components linked to the Contact part
├──home # Components linked to the Home page
├──portfolio # Components linked to the Portfolio
├──resume # Components linked to the Resume part
├──structure # Elements of the site architecture
data # JavaScript objects containing the data to display in the components
pages  # where all the code is, this is the folder who get all our interest here contains all the pages of the application, which will serve as a "router" (folder to keep for the proper functioning under NextJs)
```

## Standards

- camelCase is the way to go here :camel:

- PascalCase for component names

## Author

-  [Sylène](https://github.com/Zesysy) - Web developer
