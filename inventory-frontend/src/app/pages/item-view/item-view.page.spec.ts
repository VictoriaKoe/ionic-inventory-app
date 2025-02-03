import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemViewPage } from './item-view.page';

describe('ItemViewPage', () => {
  let component: ItemViewPage;
  let fixture: ComponentFixture<ItemViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
