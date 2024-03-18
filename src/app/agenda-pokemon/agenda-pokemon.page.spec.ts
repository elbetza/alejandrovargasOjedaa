import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendaPokemonPage } from './agenda-pokemon.page';

describe('AgendaPokemonPage', () => {
  let component: AgendaPokemonPage;
  let fixture: ComponentFixture<AgendaPokemonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgendaPokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
