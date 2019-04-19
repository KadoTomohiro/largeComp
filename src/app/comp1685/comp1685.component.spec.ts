import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1685Component } from './comp1685.component';

describe('Comp1685Component', () => {
  let component: Comp1685Component;
  let fixture: ComponentFixture<Comp1685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
