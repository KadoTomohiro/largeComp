import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp166Component } from './comp166.component';

describe('Comp166Component', () => {
  let component: Comp166Component;
  let fixture: ComponentFixture<Comp166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
