import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycloidGraphComponent } from './cycloid-graph.component';

describe('CycloidGraphComponent', () => {
  let component: CycloidGraphComponent;
  let fixture: ComponentFixture<CycloidGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CycloidGraphComponent]
    });
    fixture = TestBed.createComponent(CycloidGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
