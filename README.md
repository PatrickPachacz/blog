# About
Blog application allowing users to create posts while also uploading images about various topics. 

# Screenshot
<img src="screenshot.png" />

# Problems / Solutions
<h3>Problem #1</h3>
<p>After uploading to github we received a 404 message(screenshot below)</p>
<img src="screenshot-error.png" />
<h3>Solution #1</h3>
<p>To fix the error we use errorBoundary. An ErrorBoundary is a React component that catches errors that occur during rendering, in lifecycle methods, and in constructors of the whole tree below them. It allows you to handle the error gracefully and display a fallback UI instead of crashing the application. </p>
