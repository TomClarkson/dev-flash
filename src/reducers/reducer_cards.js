// this would come from firebase
var questionsArr = [
  {'text': 'what is javascript?', 'id': '1234', 'category': 'javascript'},
  {'text': 'what is css?', 'id': '1235', 'category': 'css'},
  {'text': 'what is html?', 'id': '1236', 'category': 'html'},
  {'text': 'what is angular?', 'id': '1237', 'category': 'angular'},
  {'text': 'what is jquery?', 'id': '1238', 'category': 'jquery'}
];

questionsArr[0].active = true;

export default function(state=questionsArr, action) {
  // make first card active, after randomizing
  switch(action.type) {
    case 'SKIP_CARD':
      let questions = state.slice();
      // find active card
      let findActive = (question) => {
        return question.active === true;
      }
      let activeIndex = questions.findIndex(findActive);

      // deactivate
      questions[activeIndex].active = false;

      // activate next one
      questions[activeIndex + 1].active = true;

      return questions;
    default:
      return state;
  }
}
