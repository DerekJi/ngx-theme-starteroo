import { Component, OnInit, Input, ViewChild, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { SidebarService } from '@core/services/sidebar.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @Input() width = '15rem';
  @Input() mode: 'overlay' | 'push' | 'slide' = 'overlay';
  @Input() content = 'app-content';
  @Input() bgcolor: string;
  @Input() fgcolor: string;

  @ViewChild('sidebar', { read: ElementRef, static: false }) sidebar: ElementRef;

  constructor(
    private sidebarService: SidebarService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.mode === 'overlay') {
      this.setStyle('width', this.width);
    } else {
      this.setStyle('min-width', this.width);
      this.setStyle('max-width', this.width);
      this.renderer.setStyle(this.contentElement, 'width', '100%');
    }
  }

  /**
   *
   */
  get active$(): Observable<boolean> { return this.sidebarService.active$(); }

  get isOverlay(): boolean { return this.mode === 'overlay'; }
  get contentElement(): Element {
    return document.querySelector(this.content);
  }

  /**
   *
   */
  get marginLeft$() {
    return this.active$.pipe(
      map((active) => active ? '0' : '-' + this.width)
    );
  }

  /**
   *
   */
  toggleActive(): void {
    const active = this.sidebarService.toggleActive();
    if (!this.isOverlay) {
      const contentWidth = active ? `calc(100% - ${this.width})` : '100%';
      this.renderer.setStyle(this.contentElement, 'width', contentWidth);
    }
  }

  /**
   *
   * @param key css attribute name, for example, 'color'
   * @param value css attribute value, for example, '#fff'
   */
  private setStyle(key: string, value: any): void {
    if (value !== null && value !== undefined) {
      this.renderer.setStyle(this.sidebar.nativeElement, key, value);
    }
  }
}
