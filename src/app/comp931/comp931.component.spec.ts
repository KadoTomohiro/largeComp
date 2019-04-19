import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp931Component } from './comp931.component';

describe('Comp931Component', () => {
  let component: Comp931Component;
  let fixture: ComponentFixture<Comp931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
