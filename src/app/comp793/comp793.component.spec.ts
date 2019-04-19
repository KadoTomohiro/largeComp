import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp793Component } from './comp793.component';

describe('Comp793Component', () => {
  let component: Comp793Component;
  let fixture: ComponentFixture<Comp793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
