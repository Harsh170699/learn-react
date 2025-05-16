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
