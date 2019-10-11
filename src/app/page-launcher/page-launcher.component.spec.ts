import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLauncherComponent } from './page-launcher.component';

describe('PageLauncherComponent', () => {
  let component: PageLauncherComponent;
  let fixture: ComponentFixture<PageLauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
