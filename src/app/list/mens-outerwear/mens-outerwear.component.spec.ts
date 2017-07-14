import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensOuterwearComponent } from './mens-outerwear.component';

describe('MensOuterwearComponent', () => {
  let component: MensOuterwearComponent;
  let fixture: ComponentFixture<MensOuterwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensOuterwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensOuterwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
