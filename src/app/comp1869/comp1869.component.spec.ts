import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1869Component } from './comp1869.component';

describe('Comp1869Component', () => {
  let component: Comp1869Component;
  let fixture: ComponentFixture<Comp1869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
