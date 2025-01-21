import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermsPolicyPage } from './terms-policy.page';

describe('TermsPolicyPage', () => {
  let component: TermsPolicyPage;
  let fixture: ComponentFixture<TermsPolicyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
