import { Component, Prop, h, Fragment } from '@stencil/core';
// import { format } from '../../utils/utils';
import add from '../../../assets/icons/add.svg';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  render() {
    return (
      <Fragment>
  {/* <div>Hello, World! I'm {this.getText()}</div> */}
    <div class='svg-container' innerHTML={add} />
      </Fragment>
  
    );
  }
}
