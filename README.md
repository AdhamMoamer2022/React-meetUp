# Adding Routing
    we need to install react-router-dom and we have to add the below three things:
     1- Import { BrowserRouter } from 'react-router-dom'; and thats in the index.js and wrap the entire app with BrowserRouter
     2- Add the page folder and start to add our pages (the different between pages and components is that pages consist of many components)
     3- Add the routes to the pages in the App.js file

     by default the router will check for all the matching routes and if there is a match it will render the component
     so in case to set the router to take only one route we have to wrap the routes with Switch component
     and we can additional attribute to the route to check for the exact route.

     *update
     in the new version of React 
     we use Routes and match the path with component using element property

# Adding Links & Navigation
    in normal html we have to use <a> tag to create a link, which when we click it will send a request to the server to get the page
    then the browser router will render the required page
    React has come with a solution for this as we dona  want to send any request to the server, we can use Link component
    Link component is a component that we can use to create a link, it has a property called to which we can pass the path to the page
    Link will change the url to the path we pass to it.

# CSS Modules

    we already have our index.css file which is the main CSS file. However, if we need to assign specific styles to different components, 
    so in this case we need to create a separate CSS file for each component.
    in other word we create specific CSS module for each component , we also have to put .module in the name of the CSS file.
    and then we import the Styles or the classes to the component and we deal with the styles in the component as  it is a object.
    and then and in the build step we bundle all the CSS modules into one file.
    also if there is conflict between the styles in the module and the global styles React will choose the one in the module if we use the object syntax.

Outputting Lists 1:56:14
Adding More Components´2:02:04
Props Children 2:11:52
Adding a Form 2:20:31
Getting User Input & Handling Form Submission 2:29:30
Preparing the App for HTTP 2:39:15
Sending a Post Request 2:46:07
Navigating Programmatically 2:51:25
Getting Started with Fetching Data 2:55:07
useEffect 3:04:32
Introducing React Context´3:14:40
Context Logic & Different Ways of Updating State 3:25:43
Using Context in Components 3:31:37
More Context Usage 3:43:48
Summary 3:50:42