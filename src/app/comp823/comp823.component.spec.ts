import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp823Component } from './comp823.component';

describe('Comp823Component', () => {
  let component: Comp823Component;
  let fixture: ComponentFixture<Comp823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
