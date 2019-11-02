This is a very simple blog template that exists to highlight some of Materialize's features and, hopefully, might be used by anyone looking to learn more about the framework.

<h2>Home Page</h2>
The home page utilizes Materialize's navigation bar and dropdown menu at the top of the page. JavaScript for the dropdown menu initialization, as well as initializations for all other dynamic components, can be found in the index.js file.
Below the navigation, the framework's card class is used to group information about the individual blog posts as well as link to the blog posts themselves. In this case, there is only one blog post, so they all link to the same file.

After the cards, a Materialize collapsible accordion exists to house a contact form that's been styled using the framework as well. The footer, directly below that, is simplistic. It includes copyright info which uses a dynamic date year (vanilla JavaScript) and three links to the right of that. Again, all JavaScript can be found in the index.js file.

<h2>Blog Page</h2>
In many ways, the blog page is very similar to the home page. It uses the same navigation, accordion, and footer. The blog content utilizes Materialize's "flow-text" class and a few code tags to style the content.