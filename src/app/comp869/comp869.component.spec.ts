import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp869Component } from './comp869.component';

describe('Comp869Component', () => {
  let component: Comp869Component;
  let fixture: ComponentFixture<Comp869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
