import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp685Component } from './comp685.component';

describe('Comp685Component', () => {
  let component: Comp685Component;
  let fixture: ComponentFixture<Comp685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
