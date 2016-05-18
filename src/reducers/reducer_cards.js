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
  let questionsData = Object.assign({}, state);

  switch(action.type) {
    case 'SKIP_CARD':

      // find active card
      let findActive = (question) => {
        return question.active === true;
      }
      let activeIndex = questionsData.cards.findIndex(findActive);

      // deactivate
      questionsData.cards[activeIndex].active = false;

      questionsData.cards.find((elem, index, arr) => {
        if (elem.filtered && index > activeIndex) {
          arr[index].active = true;
          return true;
        }
      });

      // activate next one
      // questionsData.cards[activeIndex + 1].active = true;
      console.log(questionsData.cards);

      return questionsData;
    case 'CATEGORY_TOGGLED':
      // find all cards that match the category that was toggled
      questionsData.cards = questionsData.cards.map((card) => {
        if (card.category === action.payload.name) {
          // toggle card filtered status
          card.filtered = !card.filtered;
        }
        return card;
      });
      return questionsData;
    case 'SELECT_ALL':
      questionsData.cards = questionsData.cards.map((card) => {
        card.filtered = true;
        return card;
      });
      return questionsData;
    case 'DESELECT_ALL':
      questionsData.cards = questionsData.cards.map((card) => {
        card.filtered = false;
        return card;
      });
      return questionsData;
    default:
      return state;
  }
}
