import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp183Component } from './comp183.component';

describe('Comp183Component', () => {
  let component: Comp183Component;
  let fixture: ComponentFixture<Comp183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
