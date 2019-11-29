import { Component, OnInit } from '@angular/core';
// import { UploadService } from '../upload.service';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { concat } from  'rxjs';
import { ProviderService } from 'src/app/shared/services/provider.service';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;
  constructor(private providerService:ProviderService) { }
  fileOverBase(event):  void {
    this.hasBaseDropZoneOver  =  event;
}
getFiles(): FileLikeObject[] {
  return this.uploader.queue.map((fileItem) => {
    return fileItem.file;
  });
}

upload() {   
  let files = this.getFiles();
  console.log(files);
  let requests = [];
  const cred={
    text:'hz',
    documents_uploaded:files,
    user_ids:[1]
  }
  this.providerService.post_create(cred).subscribe(post=>{
    console.log(post)
  })
  // files.forEach((file) => {
  //   let formData = new FormData();
  //   console.log(file.rawFile, file.name)
  //   // formData.append('file' , file.rawFile, file.name);
  //   // requests.push(this.uploadService.upload(formData));     
  // });

  // concat(...requests).subscribe(
  //   (res) => {
  //     console.log(res);
  //   },
  //   (err) => {  
  //     console.log(err);
  //   }
  // );
}
  ngOnInit() {
  }

}
