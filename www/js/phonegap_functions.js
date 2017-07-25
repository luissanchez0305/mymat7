function uploadPhoto(imageURI) {
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
            options.mimeType = "image/jpeg";

            var params = new Object();
            params.value1 = "test";
            params.value2 = "param";

            options.params = params;
            options.chunkedMode = false;

            var ft = new FileTransfer();
            var trueUrl = cordova.file.dataDirectory + "IMG_0009.JPG";
            ft.upload(imageURI, "http://ateliercr.com/clientes/healinghouse/php/api/upload_photo.php", win, fail, options);
        }

        function win(r) {

            console.log(r);
            var parsed = JSON.parse(r.response);
            sessionStorage.avatarFilename = parsed.file;

        }

        function fail(error) {
                       console.log('Filename is ');
        }


        function getPhoto() {
            // Retrieve image file location from specified source
            navigator.camera.getPicture(onPhotoURISuccess, onFail, {
                quality: 50,
                destinationType: navigator.camera.DestinationType.FILE_URI,
                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
            });
        }



        function onFail(message) {
            alert('Failed because: ' + message);
        }


        function onPhotoURISuccess(imageURI) {
            // Uncomment to view the image file URI
            // console.log(imageURI);

            // Get image handle
            //
            var profilepic = document.getElementById('profilepic');

            // Unhide image elements
            //
            //familyImage.style.display = 'block';

            // Show the captured photo
            // The in-line CSS rules are used to resize the image
            //
            profilepic.src = imageURI;

            uploadPhoto(imageURI);
        }



        function onPhotoDataSuccess(imageSrc) {
            // Uncomment to view the base64-encoded image data
            // console.log(imageData);

            // Get image handle
            //
            var smallImage = document.getElementById('familyImage');

            // Unhide image elements
            //
            // smallImage.style.display = 'block';

            // Show the captured photo
            // The in-line CSS rules are used to resize the image
            //
            smallImage.src = imageSrc;

            uploadPhoto(imageSrc);

        }



        function capturePhoto() {
            // Take picture using device camera and retrieve image as base64-encoded string
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
                quality: 50,
                destinationType: navigator.camera.DestinationType.FILE_URI
            });
        }