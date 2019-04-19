import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp949Component } from './comp949.component';

describe('Comp949Component', () => {
  let component: Comp949Component;
  let fixture: ComponentFixture<Comp949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
