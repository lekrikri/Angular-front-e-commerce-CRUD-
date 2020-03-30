import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserajouterComponent } from './userajouter.component';

describe('UserajouterComponent', () => {
  let component: UserajouterComponent;
  let fixture: ComponentFixture<UserajouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserajouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserajouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
