namespace upload.Controllers {

  export class HomeController {

    public message = 'Hello';

    public file;

          public pickFile() {
              // alert('hello newman');
              this.filepickerService.pick(
                  { mimetype: 'image/*' },
                  this.fileUploaded.bind(this)
              );
          }

          public fileUploaded(file) {
              // save file url to database
              this.file = file;
              this.$scope.$apply(); // force page to update
          }

          constructor(private filepickerService, private $scope: ng.IScope) { }
      }

      angular.module('upload').controller('HomeController', HomeController);
  }
