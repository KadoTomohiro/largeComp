import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp576Component } from './comp576.component';

describe('Comp576Component', () => {
  let component: Comp576Component;
  let fixture: ComponentFixture<Comp576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
