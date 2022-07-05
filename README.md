## ENV file configuration
Before deploying, create a .env file in the root directory with the following fields:
```
ACCESS_KEY_ID = 
SECRET_ACCESS_KEY = 
DEFAULT_REGION = 
```
It is required to put your own AWS credentials in the above fields. Also provide the same values in serverless.yml file.

## Serverless packaging resolution
While deploying Serverless, an error like "EMFILE: too many open files" may show up. To resolve, refer to [tobelesa's comment](https://forum.serverless.com/t/emfile-too-many-open-files-error-while-ci-cd-deploy/14245/9). In this repository, the lines have already been replaced.
