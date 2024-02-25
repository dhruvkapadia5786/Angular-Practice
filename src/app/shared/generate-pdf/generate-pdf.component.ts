import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-generate-pdf',
  standalone: true,
  imports: [],
  templateUrl: './generate-pdf.component.html',
  styleUrl: './generate-pdf.component.scss'
})
export class GeneratePdfComponent {

  generatePDF(){
    const margins = {
      top: 30,
      bottom: 30,
      left: 15,
      right: 30,
    }
    const doc = new jsPDF();
    doc.setFont('Times');

    doc.setFontSize(18);
    doc.text('Angular 17 PDF', margins.left, margins.right);

    doc.setFontSize(18);
    doc.text('this is trial pdf content', margins.left, margins.right);

    doc.addImage(
      `https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80`,
      'JPEG',
      margins.left, // x-coordinate
      70, // y-coordinate
      50, // width
      50 // height
    );

    doc.save('hello world.pdf');
  }
}
