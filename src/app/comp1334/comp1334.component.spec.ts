import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1334Component } from './comp1334.component';

describe('Comp1334Component', () => {
  let component: Comp1334Component;
  let fixture: ComponentFixture<Comp1334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
