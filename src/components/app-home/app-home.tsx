import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @State() list;
  // componentDidLoad() {
  //   this.list = this.getList();
  //   console.log('componentDidLoad');
  // }
  render() {
    return (
      <div class="app-home">
        {/* <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p> */}
        <button onClick={() => (this.list = this.getList())}>Click to generate options</button>
        <app-sample list={this.list}></app-sample>
      </div>
    );
  }

  private getList = () => {
    return Array.from({ length: 1000 }, (_, i) => i + 1);
  };
}
