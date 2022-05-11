function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
const TYPING_SPEED = 150;
const DELETING_SPEED = 75;

class Typer extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: TYPING_SPEED });_defineProperty(this, "handleType",

    () => {
      const { dataText } = this.props;
      const { isDeleting, loopNum, text, typingSpeed } = this.state;
      const i = loopNum % dataText.length;
      const fullText = dataText[i];

      this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? DELETING_SPEED : TYPING_SPEED });


      if (!isDeleting && text === fullText) {
        setTimeout(() => this.setState({ isDeleting: true }), 1000);
      } else if (isDeleting && text === '') {
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1 });
      }

      setTimeout(this.handleType, typingSpeed);
    });}componentDidMount() {this.handleType();}

  render() {
    return /*#__PURE__*/(
      React.createElement("h1", null, this.props.heading, "\xA0", /*#__PURE__*/
      React.createElement("span", null, this.state.text), /*#__PURE__*/
      React.createElement("span", { id: "cursor" })));
  }}

ReactDOM.render( /*#__PURE__*/
React.createElement(Typer, {
  heading: "Hi! I'm Kaylyn,",
  dataText: [
  'a UI designer.',
  'a cat lover.',
  'an artist.',
  'a foodie.',
  'a visual designer.',
  'a coffee addict.',
  'a photographer.',
  'a graphic designer.'] }),

document.getElementById('app'));
