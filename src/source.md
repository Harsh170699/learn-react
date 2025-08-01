React does not return 'false', 'null', 'undefined', 'NaN' in the DOM. These values when used in JSX, 
will result in nothing being displayed

However, 0 and empty strings ('') are exceptions:

'0' is rendered in the DOM becasue it is considered a valid React node. This means
that is '0' is the result in expression, it will appear in your UI.

('') empty strings are also considered valid and are rendered as well.

//* 1. Variables
//? you can embed any JS variable in JSX by enclosing it in {} braces. 
//? The value of the variable will be inserted into the DOM at the respective location.

// * 2. Expressions
// ? JSX allows you to write any JS expression inside {} braces. This includes operations, function calls, and even ternary operators and
//? other JS expressions that produce a value.

// * 3. Functions
// ? Functions, especially those  that return JSX, can be invoked directly within your JSX.

## ImportExport

## Default Export Import
Default export: A file can have only one default export.
Default import: When importing a default export, you can name the import whatever you like

## Named Exports Imports

Named Export: A file can have multiple named exports.
              Each named export must be explicitly exported.

Named Import: When importing named exports, the import names must watch the export names exactly.
              Named imports must be enclosed in curly braces.

## Inline Styles
Inline styles are applied directly to the HTML elements via the style attribute. This approach
uses JS objects top to define the CSS properties and values.

# 1. JS Object Syntax

Inline Styles in react are specified using JS objects. Property names are written in camelCase instead of the traditional CSS kebab-case

const style = {
    backgroundColor: 'blue',
    fontSize: '16px'
};

# 2. Units

For most numeric values, you need to specify units as a string (eg: '16px'). Some properties like z-index can take numeric
values directly

const style = {
    padding: '10px',
    zindex: 1,
};

# 3. Performance Considerations

Defining inline styles directly within the JSX can lead to performance issues because a new object is created
on every render. To avoid this, define styles outside of the render method or as constants.

const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white'
};

## CSS Conditional stylings in Reat JS

you can use ternary operators to add conditional stylings to your CSS.

# Applying padding in TailWind
Here are both Approaches

## Extended Spacing scale
If you have extended the spacing scale, you can use the custom classes

<div class='py-23 px12'>Content</div>

## Arbitrary values

you can use arbitrary values directly

<div class='py-[3.2rem] px-[1.2rem]'>Content</div>

-----------------------------------------------------------------------------

## Detailed explanation of Toggle Switch Button
    - State management: We will use the useState hookto manage whether the switch is on or OFF.
    - Styling: We will use conditional styling to change the appearance of the switch based on its state.
    - Event handling: We will handle the click event to toggle the state of the switch

------------------------------------------------------------------------------

## Simple ToDo list in React

# Part 1

# Overview
    - We will start with the basics of building simple ToDo list in react. We will focus on setting up the project,
      creating components, and managing state effectively.

    - Set up the react project
    - Create the main 'ToDo' component
    - Build 'ToDoForm' component for adding tasks
    - Use the 'useState' hook to manage the lists of tasks
    - Implement basic form validation to ensure tasks are not empty
    - Discuss best practices for component structure and state management

# Imp points to keep in mind
    - Ensure your component structure is clean and maintainable
    - Use controlled components for form inputs to handle state correctly.
    - Keep functions simple and focussed on a single task.
    