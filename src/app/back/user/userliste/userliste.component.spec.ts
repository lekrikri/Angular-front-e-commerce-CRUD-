import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlisteComponent } from './userliste.component';

describe('UserComponent', () => {
  let component: UserlisteComponent;
  let fixture: ComponentFixture<UserlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
