import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  constructor(private http: HttpClient) {}

  // imageUpload(imageForm: FormData) {
  //   console.log('image uploading');
  //   return this.http.post('http://localhost:3000/api/file/upload', imageForm);
  // }

  imageUpload(imageForm: FormData){
    console.log('image uploading');
    const uploadFileUrl = `${apiEndpoint.FileUpload.single}`;
    return this.http.post(uploadFileUrl, imageForm)
  }
}