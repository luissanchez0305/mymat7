angular.module('config', [])

.constant('myAppConfig', 
  {
  	ver: '1.0', 
  	mainApiUrl: 'http://52.38.113.207:8080/php/api/',
  	myMatApiUrl:'http://192.168.1.3/start.htm',
  	myMatApiAddress:'http://192.168.1.3/'
  	contentfulSpaceId: 'f0tgihb1aq4e',
  	defaultLanguage: 'en',
  	contentfulAccessToken: '1bb3dc8c0c1c4bd0028ef44c1d4ddcce73e43e2aa32e5c26532af62a4d5f0370',
  	contentfulProgramsModelId: '1GjVSnEWa08ow2UGY8yS0w',
  	contentfulContentModelId: '3uiBUNHok6s3gsVmh7xczD'
  }

);