import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storepage } from './storepage';

describe('Storepage', () => {
  let component: Storepage;
  let fixture: ComponentFixture<Storepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Storepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
