import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CulturageneralPage } from './culturageneral.page';

describe('CulturageneralPage', () => {
  let component: CulturageneralPage;
  let fixture: ComponentFixture<CulturageneralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CulturageneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
