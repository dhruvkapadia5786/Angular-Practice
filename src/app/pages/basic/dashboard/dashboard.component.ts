import { Component, Input, ViewChild } from '@angular/core';
import { FileUploadComponent } from "../../../pages/file-upload/file-upload.component";
import { UsersListComponent } from "../../users/users-list/users-list.component";
import { AnimationType } from '../../../shared/carousel/carousel.animations';
import { Slide } from '../../../shared/carousel/carousel.interface';
import { CarouselComponent } from '../../../shared/carousel/carousel.component';
import { ProductsListComponent } from "../../fake-api/products-list/products-list.component";
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { AnimationComponent } from "../../../shared/animation/animation.component";
import { GeneratePdfComponent } from "../../../shared/generate-pdf/generate-pdf.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    animations: [
        trigger('footballAnimation', [
            state('left', style({
                transform: 'translateX(0)'
            })),
            state('right', style({
                transform: 'translateX(100%)'
            })),
            transition('left => right', animate('2s', keyframes([
                style({ transform: 'translateX(0)', offset: 0 }),
                style({ transform: 'translateX(70%)', offset: 0.7 }),
                style({ transform: 'translateX(100%)', offset: 1.0 })
            ]))),
            transition('right => left', animate('2s', keyframes([
                style({ transform: 'translateX(100%)', offset: 0 }),
                style({ transform: 'translateX(30%)', offset: 0.3 }),
                style({ transform: 'translateX(0)', offset: 1.0 })
            ])))
        ])
    ],
    imports: [FileUploadComponent, UsersListComponent, CarouselComponent, ProductsListComponent, AnimationComponent, GeneratePdfComponent]
})
export class DashboardComponent {
    @ViewChild(CarouselComponent, { static: true })
    carousel: CarouselComponent = new CarouselComponent;
  
    animationType = AnimationType.Scale;

    slides: Slide[] = [
      {
        headline: "For Your Current Mood",
        src:
          "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      },
      {
        headline: "Miouw",
        src:
          "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
      },
      {
        headline: "In The Wilderness",
        src:
          "https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80"
      },
      {
        headline: "Focus On The Writing",
        src:
          "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
      }
    ];

    state: string = 'left';

    ngOnInit() {
      setTimeout(() => {
        this.state = 'right';
      }, 2000); // Adjust the delay as needed
    }
  
}
