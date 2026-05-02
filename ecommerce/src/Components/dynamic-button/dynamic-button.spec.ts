import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicButton } from './dynamic-button';

describe('DynamicButton', () => {
  let component: DynamicButton;
  let fixture: ComponentFixture<DynamicButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicButton],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
