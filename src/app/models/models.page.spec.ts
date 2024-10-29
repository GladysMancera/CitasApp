import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelsPage } from './models.page';

describe('ModelsPage', () => {
  let component: ModelsPage;
  let fixture: ComponentFixture<ModelsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
