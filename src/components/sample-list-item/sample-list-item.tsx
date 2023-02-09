import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-sample-list',
  styleUrl: 'app-sample-list.css',
  shadow: true,
})
export class SampleListItem {
  @Prop() index;
  render() {
    return <li class="sample-li">{`Item ${this.index}`}</li>;
  }
}
