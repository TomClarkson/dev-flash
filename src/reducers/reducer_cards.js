// this would come from firebase. initial, full list of questions.
var questionsArr = [
  {'text': 'what is javascript?', 'id': '1234', 'category': 'javascript'},
  {'text': 'what is css?', 'id': '1235', 'category': 'css'},
  {'text': 'what is html?', 'id': '1236', 'category': 'html'},
  {'text': 'what is angular?', 'id': '1237', 'category': 'angular'},
  {'text': 'what is jquery?', 'id': '1238', 'category': 'jquery'}
];

// randomize/ shuffle questions

// activate first card in deck
questionsArr[0].active = true;

// object to hold all relevant data
var questionsObj = {
  cards: questionsArr,
  filter: [] // categories to include in filter
};

export default function(state=questionsObj, action) {
  // make copy of questions from state
  let questions = Object.assign({}, state);

  switch(action.type) {
    case 'SKIP_CARD':

      // find active card
      let findActive = (question) => {
        return question.active === true;
      }
      let activeIndex = questions.cards.findIndex(findActive);

      // deactivate
      questions.cards[activeIndex].active = false;

      // activate next one
      questions.cards[activeIndex + 1].active = true;

      return questions;
    case 'CATEGORY_TOGGLED':

    case 'SELECT_ALL':
      return cards;
    case 'DESELECT_ALL':
      return [];
    default:
      return state;
  }
}
