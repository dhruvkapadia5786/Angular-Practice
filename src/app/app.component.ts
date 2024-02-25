import { Component , Inject, PLATFORM_ID, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {isPlatformBrowser} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FileUploadComponent } from "./pages/file-upload/file-upload.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Slide } from './shared/carousel/carousel.interface';
import { AnimationType } from './shared/carousel/carousel.animations';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, FileUploadComponent, FooterComponent]
})
export class AppComponent {
  // title = 'angular-17';
  static isBrowser = new BehaviorSubject<boolean | null>(null);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
  } 
}
