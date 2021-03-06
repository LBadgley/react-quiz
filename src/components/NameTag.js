import React, { PureComponent } from 'react';
import ColorSelector from './ColorSelector';
// import Shape from './Shape';
// import TextSelector from './TextSelector';

export default class NameTag extends PureComponent {
  state = {
    text: '',
    color: '',
    backgroundColor: ''
  }
  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text, color } = this.state;

    return (
      <section >
        <input type="text" name="text" value={text} onChange={this.changeHandler} />  
        <input name="color" type="color" value={color} onChange={this.changeHandler} />
        <div className={[ColorSelector]}>{text}</div>

      </section>
    );
  }
}
