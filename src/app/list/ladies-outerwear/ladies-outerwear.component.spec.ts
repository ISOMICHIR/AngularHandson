import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesOuterwearComponent } from './ladies-outerwear.component';

describe('LadiesOuterwearComponent', () => {
  let component: LadiesOuterwearComponent;
  let fixture: ComponentFixture<LadiesOuterwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadiesOuterwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadiesOuterwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
