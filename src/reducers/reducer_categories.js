/*
This reducer creates the "categories" piece of state
Will probably not need to handle actions, since categories are unchanging
*/

export default function() {
  return [
    {name: 'javascript'},
    {name: 'html'},
    {name: 'css'},
    {name: 'angular'},
    {name: 'cs fundamentals'},
    {name: 'node'},
    {name: 'git'},
    {name: 'unix'},
    {name: 'miscellaneous'}
  ];
}
