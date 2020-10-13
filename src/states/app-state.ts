import { observable, runInAction, action } from '@global/mobx';

export default class AppState {
  @observable count = 100;
  @observable count1 = 101;

  @action
  public increase = () => {
    this.count = this.count + 1;
  };

  @action
  public decrease = () => {
    this.count--;
  };
}
