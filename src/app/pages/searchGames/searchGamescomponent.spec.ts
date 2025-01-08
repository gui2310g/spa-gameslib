import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGamesComponent } from './searchGames.component';

describe('SearchedGamesComponent', () => {
  let component: SearchGamesComponent;
  let fixture: ComponentFixture<SearchGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
