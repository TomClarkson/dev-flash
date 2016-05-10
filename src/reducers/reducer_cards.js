export default function() {
  // get this from firebase
  var questionArr = [
    {'text': 'what is javascript?', 'id': '1234', 'category': 'javascript'},
    {'text': 'what is css?', 'id': '1235', 'category': 'css'},
    {'text': 'what is html?', 'id': '1236', 'category': 'html'},
    {'text': 'what is angular?', 'id': '1237', 'category': 'angular'},
    {'text': 'what is jquery?', 'id': '1238', 'category': 'jquery'}
  ];

  // randomize

  // make first card active, after randomizing
  questionArr[0].active = true;

  return questionArr;
}
