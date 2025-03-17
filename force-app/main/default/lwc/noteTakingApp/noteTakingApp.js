import { LightningElement, track,api } from 'lwc';
import CREATENOTES from '@salesforce/apex/NoteController.insertNote';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class EIPCreateNotes extends LightningElement {
    @track title = '';
    @track content = '';
    @api recordId;
    handleTitleChange(event) {
        this.title = event.target.value;
    }
    handleContentChange(event) {
        this.content = event.target.value;
    }
    handleInsertNote() {
        CREATENOTES({ title: this.title, content: this.content, recordId: this.recordId})
            .then(noteId => {
                this.dispatchEvent(new ShowToastEvent({ title: 'Success', message: 'Notes Added Succesfully.', variant: 'success' }));
                this.title = '';
                this.content = '';

            })
            .catch(error => {
                this.dispatchEvent(new ShowToastEvent({ title: 'Erorr', message: 'Error Adding Notes.', variant: 'error' }));
            });
    }
}
