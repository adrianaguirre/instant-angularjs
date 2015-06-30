/**
 * Created by adrian.squirm on 6/4/15.
 * This example is accessing routes directly
 * This is an example of "deeplinking" the view
 */
var guidebookConfig = function ($routProvider) {
  /**
   * Recipe for $routeProvider
   * Routes define how we move around within the angular app.
   */
  $routeProvider
    .when('/', {
      controller: 'ChaptersController',
      templateURL: 'view/chapters.html',
    }).when('/chapter/:chapterId', {
      controller: 'ChaptersController',
      templateURL: 'view/chapters.html',
    }).when('/addNote/:chapterId', {
      controller: 'AddNoteController',
      templateURL: 'view/addNote.html',
    }).when('/deleteNote/:chapterId/:noteId', {
      controller: 'DeleteNoteController',
      templateURL: 'view/addNote.html',
    });
};
/**
 * Define Namespace 'module'
 */
var Guidebook = angular.module('Guidebook', []).config(guidebookConfig);

/**
 * Notes:
 * At this point we have our app configured with a few routes, and we've told AngularJS
 * which controller to load for each route, as well as which view to load for that controller.
 *
 * Next: Move on to building views.
 */

