React does not return 'false', 'null', 'undefined', 'NaN' in the DOM. These values when used in JSX, 
will result in nothing being displayed

However, 0 and empty strings ('') are exceptions:

'0' is rendered in the DOM becasue it is considered a valid React node. This means
that is '0' is the result in expression, it will appear in your UI.

('') empty strings are also considered valid and are rendered as well.