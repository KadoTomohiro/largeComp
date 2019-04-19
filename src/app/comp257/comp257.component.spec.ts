import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp257Component } from './comp257.component';

describe('Comp257Component', () => {
  let component: Comp257Component;
  let fixture: ComponentFixture<Comp257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
