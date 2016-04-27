// find react library and attach to variable React
import React from 'react';

// create new component. should produce some html.
import FlashCard from './components/flash-card';
import CategoryList from './components/category-list';

const App = function() {
  return (
    <div>
      <FlashCard />
      <CategoryList />
    </div>;
  );
};
// Take this component HTML and put it on page / in the DOM

React.render(App);
