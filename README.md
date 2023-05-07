# WHY:

Database stores value as `string` or `string[]`

For *both*, Admin UI input is `textArea`

For the database type that is `string[]`, we `split` the textArea value on `\n` chars before saving

For the database type that is `string`, we store the value as a string (even if it includes '\n' chars)
