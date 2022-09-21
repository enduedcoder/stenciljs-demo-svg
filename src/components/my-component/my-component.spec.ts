import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {

  it("should match snapshots", async () => {
    const tuxbutton = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });

    expect(tuxbutton.root).toMatchSnapshot();
  });

  // it('renders', async () => {
  //   const { root } = await newSpecPage({
  //     components: [MyComponent],
  //     html: '<my-component></my-component>',
  //   });
  //   expect(root).toEqualHtml(`
  //     <my-component>
  //       <mock:shadow-root>
  //         <div>
  //           Hello, World! I'm
  //         </div>
  //         <div class="svg-container"></div>
  //       </mock:shadow-root>
  //     </my-component>
  //   `);
  // });

  // it('renders with values', async () => {
  //   const { root } = await newSpecPage({
  //     components: [MyComponent],
  //     html: `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`,
  //   });
  //   expect(root).toEqualHtml(`
  //     <my-component first="Stencil" last="'Don't call me a framework' JS">
  //       <mock:shadow-root>
  //         <div>
  //           Hello, World! I'm Stencil 'Don't call me a framework' JS
  //         </div>
  //         <div class="svg-container"></div>
  //       </mock:shadow-root>
  //     </my-component>
  //   `);
  // });
});
