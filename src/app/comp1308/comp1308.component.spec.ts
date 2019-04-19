import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1308Component } from './comp1308.component';

describe('Comp1308Component', () => {
  let component: Comp1308Component;
  let fixture: ComponentFixture<Comp1308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
