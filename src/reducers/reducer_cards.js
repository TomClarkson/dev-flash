// this would come from firebase. initial, full list of questions.
var questionsArr = [
  {'text': 'what is javascript?', 'id': '1234', 'category': 'javascript'},
  {'text': 'what is css?', 'id': '1235', 'category': 'css'},
  {'text': 'what is html?', 'id': '1236', 'category': 'html'},
  {'text': 'what is angular?', 'id': '1237', 'category': 'angular'},
  {'text': 'what is jquery?', 'id': '1238', 'category': 'jquery'}
];

// randomize/ shuffle questions


export default function(state=questionsArr, action) {
  // make copy of questions from state
  let questionsData = state.slice();

  switch(action.type) {
    case 'SKIP_CARD':

      // find active card
      let findActive = (question) => {
        return question.active === true;
      }
      let activeIndex = questionsData.findIndex(findActive);

      // deactivate
      questionsData[activeIndex].active = false;

      // find next card in array (greater index) that is inDeck
      questionsData.find((elem, index, arr) => {
        if (elem.inDeck && index > activeIndex) {
          elem.active = true; // set active to true
          return true;
        }
      });

      return questionsData;
    case 'CATEGORY_TOGGLED':
      // find all cards that match the category that was toggled
      questionsData.map((card) => {
        if (card.category === action.payload.name) {
          // toggle card inDeck status
          card.inDeck = !card.inDeck;
          // deactivate any active card, if any
          card.active = false;
        }
      });

      // make first inDeck card active
      questionsData.find((card) => {
        if (card.inDeck) {
          card.active = true;
          return true;
        }
      });

      return questionsData;
    case 'SELECT_ALL':
      questionsData = questionsData.map((card) => {
        card.inDeck = true;
        card.active = false;
        return card;
      });
      questionsData[0].active = true;
      return questionsData;
    case 'DESELECT_ALL':
      questionsData = questionsData.map((card) => {
        card.inDeck = false;
        return card;
      });
      return questionsData;
    default:
      return state;
  }
}
