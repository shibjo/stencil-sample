import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-sample',
  styleUrl: 'app-sample.css',
  shadow: true,
})
export class AppSample {
  @Prop() list;
  render() {
    return (
      <div class="sample-root">
        <ul class="sample-ul">{this.list && this.list.map((_, index) => <app-sample-list index={index}></app-sample-list>)}</ul>
      </div>
    );
  }

  // private renderItem = (_, index) => {
  //   return <li class="sample-li">{`Item ${index}`}</li>;
  // };
}
