import { Component } from '@angular/core';
import { ImageUploadService } from '../../services/file-upload.service';

interface Response {
  fileUrl: string;
  image: string;
}

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  imageObj!: File;
  fileUrl!: string;

  constructor(private imageUploadService: ImageUploadService) { }

  onImagePicked(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const FILE = target.files[0];
      this.imageObj = FILE;
    }
  }

  onImageUpload() {
    const imageForm = new FormData();
    imageForm.append('file', this.imageObj);
    this.imageUploadService.imageUpload(imageForm).subscribe((res: any) => {
      let response = res as Response;
      console.log('response :>> ', response);
      this.fileUrl = response.fileUrl; // Updated line
      console.log('this.fileUrl :>> ', this.fileUrl);
      // this.checkFileTypeAndExtension(this.fileUrl);
    });
  }

  // isImage: boolean = false;
  // isPdf: boolean = false;

  // checkFileTypeAndExtension(fileUrl: string): void {
  //   const extension = fileUrl.split('.').pop()?.toLowerCase();
  //   this.resetFlags();
  //   switch (extension) {
  //     case 'pdf':
  //       this.isPdf = true;
  //       console.log('The file is a PDF. Viewing in PDF format.');
  //       // Code to view the PDF file goes here
  //       break;
  //     case 'jpg':
  //     case 'jpeg':
  //     case 'png':
  //     case 'gif':
  //       this.isImage = true;
  //       console.log('The file is an image. Displaying the image.');
  //       // Code to display the image goes here
  //       break;
  //     default:
  //       console.log('The file type is not supported for preview.');
  //       // Code to handle unsupported file types goes here
  //       break;
  //   }
  // }

  // private resetFlags(): void {
  //   this.isImage = false;
  //   this.isPdf = false;
  // }
}
