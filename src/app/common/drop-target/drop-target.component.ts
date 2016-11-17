import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'drop-target',
  templateUrl: './drop-target.component.html',
  styleUrls: ['./drop-target.component.css']
})
export class DropTargetComponent {
  @Input() prompt:string;
  @Output() filesDropped = new EventEmitter();

  private dropHover = false;

  constructor() { }

  handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.dropHover = true;
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  handleDragLeave() {
    this.dropHover = false;
  }

  handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    this.dropHover = false;
    this.filesDropped.emit(evt.dataTransfer.files); // FileList object.
  }
}
