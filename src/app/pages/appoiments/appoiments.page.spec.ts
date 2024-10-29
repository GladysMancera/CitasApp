import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppoimentsPage } from './appoiments.page';

describe('AppoimentsPage', () => {
  let component: AppoimentsPage;
  let fixture: ComponentFixture<AppoimentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoimentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
